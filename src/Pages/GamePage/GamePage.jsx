import React, { useState } from 'react';
import { alphabet } from './alphabet';
import { Button } from '../index';
import ModalGame from './ModalGame';

const initialLetters = {
    word: [],
}

const initialBtnState = {
    btnGo: false,
    btnDone: false,
}

const GamePage = () => {
    const [allLetters, setAllLetters] = useState(alphabet);
    const [isPressed, setIsPressed] = useState(initialBtnState);
    const [isWord, setIsWord] = useState(initialLetters);
    const [modalActive, setModalActive] = useState(false);

    const randomLetters = () => {
        //  алгоритм сортировки «Тасование Фишера — Йетса»
        for (let i = allLetters.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [allLetters[i], allLetters[j]] = [allLetters[j], allLetters[i]];
        }
    }

    const handleClick = () => {
        setIsPressed({
            ...isPressed,
            btnGo: true,
        });
        randomLetters();
    }

    const handleClickLetter = (id) => {
        allLetters.map((letter) => {
            if (letter.id === id) {
                setIsWord({
                    word: [...isWord.word, letter.letter],
                });
            }
        });
        // const newData = allLetters.filter((letter) => {
        //     return letter.id !== id ? letter : null;
        // });

        // setAllLetters(newData);
    }

    const handleClickDone = () => {
        const wordString = isWord.word.join('').toLowerCase();
        if (wordString === 'hello') {
            setModalActive(true);
        }

    }

    return (
        <div className='game-page'>
            {!isPressed.btnGo &&
                <div className='game-info'>
                    <p>This is a simple word making game from the table of this application. As soon as you are sure of the composed word - click 'DONE'!</p>
                    <Button className='check go' onClick={() => handleClick()} label='GO!'></Button>
                </div>
            }
            <div>
            </div>
            {isPressed.btnGo &&
                <>
                    <div className='game-body'>
                        {
                            allLetters.map((letter) => (
                                <div key={letter.id} className='letter' onClick={() => handleClickLetter(letter.id)}>{letter.letter}</div>
                            ))
                        }
                    </div>
                    {isWord.word.length > 0 &&
                        <>
                            <div className='word-block'>
                                {
                                    isWord.word.map((letter, i) => (
                                        <p key={i}>{letter}</p>
                                    ))
                                }
                            </div>
                            <Button className='check done' onClick={handleClickDone} label='DONE' />
                        </>
                    }
                </>
            }
            <ModalGame modalActive={modalActive} setModalActive={setModalActive} />
        </div>
    )
}

export default GamePage;
