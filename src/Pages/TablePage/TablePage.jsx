import React, { useState } from 'react';
import { Modal, Button } from '../index';
import { addWordsApi, deleteWordsApi, updateWordsApi } from '../../Api/postServices';
import { deleteWords, updateWords } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const newWordsValue = {
    id: '',
    english: '',
    russian: ''
}

const TablePage = ({
    words
}) => {
    const dispatch = useDispatch()
    const [initialAllWords, setInitialAllWords] = useState(words);
    const [newWords, setNewWords] = useState(newWordsValue);
    //modal form
    const [modalActive, setModalActive] = useState(false);

    const handleChangeNewWord = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setNewWords({
            ...newWords,
            id: +(initialAllWords[initialAllWords.length - 1].id) + 1,
            [name]: value
        });
    }

    const handleAddNewWords = e => {
        e.preventDefault();
        if (newWords.english && newWords.russian) {
            setInitialAllWords((prevState) => [...prevState, newWords]);
            dispatch(addWordsApi(newWords));
            setNewWords(newWordsValue);
            setModalActive(false);
        }
    }
    //modal form

    //table
    const [isEdit, setIsEdit] = useState(false);

    const handleChangeInput = (e, id) => {
        const target = e.target;
        const value = target.value;
        const rowName = target.name;

        setNewWords({
            ...newWords,
            id: id,
            [rowName]: value
        });
    }

    const handleEdit = id => {
        setIsEdit(true);
        setNewWords({
            ...newWords,
            id: id
        })
    }

    const handleSave = () => {
        setIsEdit(false);

        const newData = initialAllWords.map(row => {
            if (row.id === newWords.id) {
                if (newWords.english) {
                    row.english = newWords.english;
                }
                if (newWords.russian) {
                    row.russian = newWords.russian;
                }
                updateWordsApi(row.id, { english: row.english, russian: row.russian });
            }
            return row;
        });

        dispatch(updateWords(newData));
        setInitialAllWords(newData);
        setNewWords(newWordsValue);
    }

    const handleRemove = id => {
        const newData = initialAllWords.filter(row => {
            return row.id !== id ? row : null;
        });
        deleteWordsApi(id);
        dispatch(deleteWords(newData));
        setInitialAllWords(newData);
    }

    const handleCancel = () => {
        setIsEdit(false);
        setNewWords(newWordsValue);
    }
    //table

    return (
        <>
            <div className='table-block'>
                <div className='open'>
                    <Button className='open-modal check' onClick={() => setModalActive(true)} label='ADD NEW WORDS' />
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ENGLISH</th>
                            <th>RUSSIAN</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            initialAllWords.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {
                                            isEdit && newWords.id === row.id
                                                ? <input
                                                    id={row.id}
                                                    type='text'
                                                    name='english'
                                                    defaultValue={row.english.toUpperCase()}
                                                    onChange={e => handleChangeInput(e, row.id)}
                                                />
                                                : row.english.toUpperCase().trim()
                                        }
                                    </td>
                                    <td>
                                        {
                                            isEdit && newWords.id === row.id
                                                ? <input
                                                    id={row.id}
                                                    type='text'
                                                    name='russian'
                                                    defaultValue={row.russian.toUpperCase()}
                                                    onChange={e => handleChangeInput(e, row.id)}
                                                />
                                                : row.russian.toUpperCase().trim()
                                        }
                                    </td>
                                    <td className='table-btns'>
                                        {
                                            isEdit && newWords.id === row.id
                                                ? <button className='action-save' onClick={() => handleSave()}>SAVE</button>
                                                : <button className='action-edit' onClick={() => handleEdit(row.id)}>EDIT</button>
                                        }
                                        {
                                            isEdit && newWords.id === row.id
                                                ? <button className='action-cancel' onClick={() => handleCancel()}>CANCEL</button>
                                                : <button className='action-remove' onClick={() => handleRemove(row.id)}>REMOVE</button>
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Modal modalActive={modalActive} setModalActive={setModalActive} handleChangeNewWord={handleChangeNewWord} handleAddNewWords={handleAddNewWords} newWords={newWords} />
        </>
    )
}

export default TablePage;
