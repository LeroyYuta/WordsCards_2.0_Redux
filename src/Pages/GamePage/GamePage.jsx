import React, { useState } from 'react';
import { alphabet } from './alphabet';
import { Button } from '../index';
import ModalGame from './ModalGame';
import { BsBackspace } from 'react-icons/bs';
import { IconContext } from "react-icons";

const initialLetters = {
    word: [],
}

const initialBtnState = {
    btnGo: false,
    btnDone: false,
    score: 0,
    wordsDone: [],
}

const GamePage = ({
    words
}) => {
    const allLetters = alphabet;
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
    }

    const handleClear = () => {
        if (isWord.word.length > 0) {
            isWord.word.pop();
            setIsWord({
                ...isWord,
                word: isWord.word,
            });
        }
    }

    const handleClickDone = () => {
        const wordString = isWord.word.join('').toLowerCase();
        words.map(item => {
            if (item.english.toLowerCase().trim() === wordString && !isPressed.wordsDone.includes(wordString)) {
                setModalActive(true);
                setIsWord({ word: [] });
                setIsPressed({
                    ...isPressed,
                    score: isPressed.score + isWord.word.length,
                    wordsDone: [...isPressed.wordsDone, wordString],
                });
            }
        })
    }

    return (
        <div className='game-page'>
            {!isPressed.btnGo &&
                <div className='game-info'>
                    <p>This is a simple word making game from the table of this application. As soon as you are sure of the composed word - click 'DONE'!
                        <br /><br /> One letter in right word = +1 score
                    </p>
                    <Button className='check go' onClick={() => handleClick()} label='GO!'></Button>
                </div>
            }
            <div>
            </div>
            {isPressed.btnGo &&
                <>
                    <div className='score'>SCORE: {isPressed.score}</div>
                    <div className='game-body'>
                        {
                            allLetters.map((letter) => (
                                <div key={letter.id} className='letter' onClick={() => handleClickLetter(letter.id)}>{letter.letter}</div>
                            ))
                        }
                    </div>
                    {isWord.word.length > 0 &&
                        <>
                            <div className='show-block'>
                                <div className='word-block'>
                                    {
                                        isWord.word.map((letter, i) => (
                                            <p key={i}>{letter}</p>
                                        ))
                                    }
                                </div>
                                <IconContext.Provider value={{ size: 2 + 'em' }}>
                                    <button className='word-clear' onClick={handleClear}><BsBackspace /></button>
                                </IconContext.Provider>
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
