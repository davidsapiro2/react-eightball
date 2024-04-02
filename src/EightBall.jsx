import React, { useState } from 'react';
import './EightBall.css';
import defaultAnswers from './Answers';


/**Magic eightball
 *
 *Props:
 *-answers
 *
 *State:
 *-answer: Message to start or random answer(text)
 *-color: Background color of eightball
 *
 * App -> EightBall -> None
 */
function EightBall({ answers = defaultAnswers }) {
    const [eightBall, setEightBall] = useState({ msg: "Think of a question", color: "black" });
    function handleClick() {
        const randNum = Math.floor(Math.random() * answers.length);

        setEightBall(answers[randNum]);
    }
    //class name should be the component name-- same with css file name
    return (
        <div style={{ backgroundColor: `${eightBall.color}` }} className='eightBall' onClick={handleClick}>
            <h1 style={{ color: `white` }}> {eightBall.msg}</h1>
        </div>
    );
}

export default EightBall;