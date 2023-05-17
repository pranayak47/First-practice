import React from 'react'
import questions from '../atoms/Data'

function Result(props) {
  return (
    <div className='score-section'>
        <h2>Completed !</h2>
        <h4>Total Score {props.score}/20</h4>
        <h4>Your Correct Answer {props.correct} out of {questions.length}</h4>
        <button onClick={props.handlePlayAgain}>Play Again</button>
    </div>
  )
}

export default Result