import React from 'react';

const Score = (props) => {
    return(<div className="score-board">
        <div className="player-main player-main-1">
            <div className="player-name">
                {props.playerNames[0]}'s Score
            </div>
            <div className="player-score">
                {props.score[0]}
            </div>
        </div>
        <div className="player-main player-main-2">
            <div className="player-name">
                {props.playerNames[1]}'s Score
            </div>
            <div className="player-score">
                {props.score[1]}
            </div>
        </div>
    </div>)
}

export default Score;