import React, { useState } from 'react';
import Button from '../Button/Button';
import { next, prev } from '../..';

const initialCount = {
    count: 0,
    checks: 0
}

const Card = ({
    words
}) => {
    const [count, setCount] = useState(initialCount);
    const [isPressed, setIsPressed] = useState({});

    const handleClickNext = () => {
        setCount({
            ...count,
            count: count.count + 1
        });
    }

    const handleClickPrev = () => {
        setCount({
            ...count,
            count: count.count - 1
        });
    }

    const handleClickCheck = id => {
        setIsPressed({
            ...isPressed,
            [id]: true,
        });
        setCount({
            ...count,
            checks: count.checks + 1
        });
    }

    const wordToUpperCaseEn = words[count.count].english.toUpperCase(),
        wordToUpperCaseRu = words[count.count].russian.toUpperCase();

    const showBtnCheck = isPressed[words[count.count].id] ? 'disabled' : 'check',
        showWordRu = isPressed[words[count.count].id] ? 'word-ru' : 'disabled';

    const prevClass = count.count === 0 ? 'disabled' : 'prev arrow',
        nextClass = count.count === words.length - 1 ? 'disabled' : 'next arrow';

    return (
        <div className='card-block'>
            <div className='learned'>
                <p>Learned: {count.checks}/{words.length}</p>
            </div>
            <div className='cards'>
                <img className={prevClass} src={prev} alt='prev' onClick={handleClickPrev} />
                <div className='card'>
                    <div className='words'>
                        <p className="word-en">{wordToUpperCaseEn}</p>
                        <p className={showWordRu}>{wordToUpperCaseRu}</p>
                    </div>
                    <div className="choose-btn">
                        <Button className={showBtnCheck} label='CHECK' onClick={() => handleClickCheck(words[count.count].id)} />
                    </div>
                </div >
                <img className={nextClass} src={next} alt='next' onClick={handleClickNext} />
            </div>
            <div className='count'>
                <p>{count.count + 1}/{words.length}</p>
            </div>
        </div>
    )
}

export default Card;
