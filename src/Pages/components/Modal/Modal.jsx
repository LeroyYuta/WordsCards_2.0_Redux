import React from 'react';

const Modal = ({
    modalActive,
    setModalActive,
    handleChangeNewWord,
    handleAddNewWords,
    newWords
}) => {
    const classNameCheck = newWords.english && newWords.russian;
    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
            <div className={modalActive ? 'modal-content active' : 'modal-content'} onClick={(e) => e.stopPropagation()}>
                <form className='modal-form' action=''>
                    <div className='form-inputs'>
                        <input
                            className={classNameCheck ? 'input-allow' : 'input-notallow'}
                            type='text'
                            name='english'
                            placeholder='English word'
                            onChange={(e) => handleChangeNewWord(e)}
                        />
                        <input
                            className={classNameCheck ? 'input-allow' : 'input-notallow'}
                            type='text'
                            name='russian'
                            placeholder='Russian word'
                            onChange={(e) => handleChangeNewWord(e)}
                        />
                    </div>
                    <button
                        className='add-btn'
                        onClick={(e) => handleAddNewWords(e)}
                        disabled={classNameCheck ? false : true}
                    >ADD</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;
