import React, { useState } from 'react';
import App from './App';
import defaultAnswers from './Answers';

function EightBall({answers = defaultAnswers}) {
    const [ answer, setAnswer] = useState("Think of a Question");
    const [ color, setColor ] = useState("black");

    function handleClick (){
        const randNum = Math.floor(Math.random() * answers.length);

        setAnswer(answers[randNum].msg);
        setColor(answers[randNum].color);
    }

    return (
        <div style={{backgroundColor: `${color}`}}>
            {answer}
        </div>
    )
}

export default EightBall;