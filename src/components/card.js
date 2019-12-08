import React from 'react';

const Card = (props) => {
    const onCardClicked = async () => {
        if(props.pending) {
            return;
        }
        if(!props.viewCards[props.cardIndex]) {
            let updatedViewCards = [...props.viewCards];
            updatedViewCards[props.cardIndex] = true;
            props.setViewCards(updatedViewCards)
            if(props.firstCard.id) { 
                props.setPending(true)
                if(props.firstCard.id === props.card.id){
                    setTimeout(() => {
                        let updatedRemoveCards = [...props.removeCards];
                        updatedRemoveCards[props.cardIndex] = true;
                        updatedRemoveCards[props.firstCard.index] = true;
                        props.setRemoveCards(updatedRemoveCards)
                        props.setFirstCard({index: null, id: null})
                        let newScore = [...props.score];
                        if(props.player) {
                            newScore[0]++;
                        } else {
                            newScore[1]++;
                        }
                        props.setScore(newScore);
                        if(!updatedRemoveCards.includes(false)){
                            props.setGameOver(true)
                        }
                        props.setPending(false)  
                    }, 1500);
                    
                } else {
                    props.setFirstCard({index: null, id: null})
                    setTimeout(()=>{
                        props.setPlayer(!props.player)
                        let updatedViewCards = [...props.viewCards];
                        updatedViewCards[props.cardIndex] = false;
                        updatedViewCards[props.firstCard.index] = false;
                        props.setViewCards(updatedViewCards)
                        props.setPending(false)
                    }, 1500)                    
                }
            } else {
                props.setFirstCard({index: props.cardIndex, id: props.card.id})
            }
        }
    }
    return(<div className={props.removeCards[props.cardIndex] ? "" :"game-card"} onClick={onCardClicked}>
        {!props.removeCards[props.cardIndex] && props.viewCards[props.cardIndex] && <React.Fragment>
                    <svg className="card-image" viewBox="0 0 70 70">
                    {props.card.image}
                </svg>
                <div className="card-name"> 
                    {props.card.name}
                </div>
            </React.Fragment>}

        {!props.removeCards[props.cardIndex] && !props.viewCards[props.cardIndex] && <React.Fragment>
            <svg className="card-image" viewBox="0 0 100 100">
            <path data-name="layer2"
                fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="2" d="M10 2v60h44V18L38 2H10z"
                strokeLinejoin="round" strokeLinecap="round"></path>
                <path data-name="layer2" fill="none" stroke="#202020" strokeMiterlimit="10"
                strokeWidth="2" d="M38 2v16h16" strokeLinejoin="round" strokeLinecap="round"></path>
                <circle data-name="layer1" cx="25" cy="26" r="4" fill="none" stroke="#202020"
                strokeMiterlimit="10" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></circle>
                <path data-name="layer1" d="M18 54c0-2.1 1-12 6-12s4 4 6 4 2.5-12 8-12 8 18.3 8 20z"
                fill="none" stroke="#202020" strokeMiterlimit="10" strokeWidth="2" strokeLinejoin="round"
                strokeLinecap="round"></path>
            </svg>
            <div className="card-name"> 
                Click to view card
            </div>
        </React.Fragment>}
    </div>)
}

export default Card;