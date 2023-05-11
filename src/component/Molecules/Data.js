import React from 'react'
import './Data.css'

export function FirstCard(props) {

    return (
        <div className='wrappar'>
            <div className="card">
                <img className="image" src={props.ManPic} alt="image" />
                <p className="name">{props.ManName}</p>
                <p className="position">{props.ManPosition}</p>
                <span>{props.ManExp1}</span>
            </div>
        </div>
    )
}
