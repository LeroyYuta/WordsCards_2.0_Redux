import React, { useState } from 'react';
import Button from '../Button/Button';
import { next, prev } from '../..';


const initialPresses = {
    pressed: false,
    checks: 0
}

const Card = ({
    words
}) => {
    const [count, setCount] = useState(0);
    const [isPressed, setIsPressed] = useState(initialPresses);

    const handleClickNext = () => {
        setCount(count + 1);
        setIsPressed({
            ...isPressed,
            pressed: false
        })
        console.log(isPressed);
    }

    const handleClickPrev = () => {
        setCount(count - 1);
    }

    const handleClickCheck = () => {
        setIsPressed({
            ...isPressed,
            pressed: true,
            checks: isPressed.checks + 1
        });
        console.log('check');
    }

    const wordToUpperCaseEn = words[count].english.toUpperCase(),
        wordToUpperCaseRu = words[count].russian.toUpperCase();

    const showBtnCheck = isPressed.pressed ? 'disabled' : 'check',
        showWordRu = isPressed.pressed ? 'word-ru' : 'disabled';

    const prevClass = count === 0 ? 'disabled' : 'prev arrow',
        nextClass = count === words.length - 1 ? 'disabled' : 'next arrow';

    return (
        <div className='card-block'>
            <div className='learned'>
                <p>Learned: {isPressed.checks}/{words.length}</p>
            </div>
            <div className='cards'>
                <img className={prevClass} src={prev} alt='prev' onClick={handleClickPrev} />
                <div className='card'>
                    <div className='words'>
                        <p className="word-en">{wordToUpperCaseEn}</p>
                        <p className={showWordRu}>{wordToUpperCaseRu}</p>
                    </div>
                    <div className="choose-btn">
                        <Button className={showBtnCheck} label='CHECK' onClick={handleClickCheck} />
                    </div>
                </div >
                <img className={nextClass} src={next} alt='next' onClick={handleClickNext} />
            </div>
            <div className='count'>
                <p>{count + 1}/{words.length}</p>
            </div>
        </div>
    )
}

export default Card;
