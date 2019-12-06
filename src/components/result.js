import React from 'react';
import Score from './score';

const Result = (props) => {
    let [message, setMessage] = React.useState('')
    React.useEffect(()=>{
        if(props.score[0] === props.score[1]) {
            setMessage("Great Run. It's a draw. EVERYBODY WINS");
        } else if(props.score[0] > props.score[1]) {
            setMessage(`CONGRATULATIONS, ${props.playerNames[0]}. You win`);
        } else {
            setMessage(`CONGRATULATIONS, ${props.playerNames[1]}. You win`);
        }
    }, [])
    return(<div className="result">
        <svg className="result-icon" viewBox="0 0 70 70">
    <path d="M37 9h13.988l-.016-8H11v8h26z"
        fill="#64738f" data-name="layer5"></path>
        <path fill="#fff" d="M25 30.158a15.921 15.921 0 0 1 12 .021V9H25z"
        data-name="layer4"></path>
        <path fill="#11aeec" d="M25 9H11v6c0 4 2.037 6.055 3.986 8l8.066 8.061.017.033A15.927 15.927 0 0 1 25 30.158z"
        data-name="layer3"></path>
        <path fill="#f2605c" d="M47.008 23c1.947-1.947 4-4 4-8l-.016-6H37v21.178a15.937 15.937 0 0 1 1.893.925l.065-.044z"
        data-name="layer2"></path>
        <circle fill="#fc6" r="16" cy="44.994" cx="31" data-name="layer1"></circle>
        <path opacity=".2" fill="#fff" d="M31 28.994a15.962 15.962 0 0 0-12.3 5.767 16 16 0 0 1 22.6 22.471A15.994 15.994 0 0 0 31 28.994z"
        data-name="opacity"></path>
        <g opacity=".15" data-name="opacity">
            <path fill="#000064" d="M34 59a15.994 15.994 0 0 1-10.308-28.228 15.993 15.993 0 1 0 17.615 26.451A15.906 15.906 0 0 1 34 59z"></path>
            <path fill="#000064" d="M23.069 31.093A15.927 15.927 0 0 1 25 30.158a16.252 16.252 0 0 1 1.613-.545L25 28c-4-5-9-11-9-13V1h-5v14c0 4 2.037 6.055 3.986 8l8.066 8.061z"></path>
        </g>
        <path strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
        stroke="#2e4369" fill="none" d="M38.941 31.06L47 23c1.947-1.947 4-4 4-8l-.027-14h-40v14c0 4 2.051 6.055 4 8l8.058 8.061M10.973 9h40M24.971 9v21.159M36.971 9v21.159"
        data-name="stroke"></path>
        <circle strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
        stroke="#2e4369" fill="none" r="16" cy="44.994" cx="30.973" data-name="stroke"></circle>
    </svg>
        <div className="title">{message}</div>
        <div><Score {...props}/></div>
        <button className="game-button" onClick={()=>{props.setGameOver(false);
            props.setScore([0, 0]);
            props.setStartGame(false)}}>Replay?</button>
    </div>)
}

export default Result;