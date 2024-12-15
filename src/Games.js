import { useState } from 'react'

const Games = (props) =>
{
    const imageUrl = props.game.image

    const [showDescription, setShowDescription] = useState(false)

    const toggleDescription = () =>
    {
        setShowDescription((prevState) =>
        {
            console.log("Description Toggle: ", !prevState)
            return !prevState
        })
    }

    return (
        <>
        <div className="card-container">
            <div className="card-header">
                <div className="card" onClick={toggleDescription}>
                <img
                    src={imageUrl}
                    alt={props.game.name}
                />
                </div>
                <div className="card-title">
                    <a href={`https://en.wikipedia.org/wiki/${props.game.name}`}
                        target="_blank"
                        rel="noreferrer">
                    {props.game.name}
                    </a>
                </div>
            </div>
            {props.game.players && showDescription && (
                <div className="card-description" onClick={toggleDescription}>
                    <p>플레이어어 : {props.game.players}</p>
                    <p>카드 장 수 : {props.game.numOfCards}</p>
                    <p>평균 게임시간 : {props.game.avgPlaytime}</p>
                    <p>목표 : {props.game.goal}</p>
                </div>
            )}
        </div>
        </>
    )
}

export default Games