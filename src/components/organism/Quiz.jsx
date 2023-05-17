import React, { useState } from 'react'
import questions from '../atoms/Data'
import './Quiz.css'
import Result from '../molecules/Result'

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [result, setResult] = useState(false)
    const [click, setClick] = useState(false)
   
    const handleNext = () => {
        setClick(false)
        const nextQuestion = currentQuestion+1
        if(nextQuestion<questions.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setResult(true)
        }
    }
   
    const handleAnswer = (isCorrect) =>{
       if(isCorrect){
        setScore(score+1)
        setCorrect(correct+1)
       }
       setClick(true)
    }
    const handlePlayAgain = ()=>{
        setCurrentQuestion(0)
        setScore(0)
        setCorrect(0)
        setResult(false)
    }
  return (
    <>
      <div className='cap'>
              {result ? (
              <Result score={score} correct={correct} handlePlayAgain={handlePlayAgain} />) :
               (
              <>
                  <div className='question-section'>
                      <h5>Score : {score}</h5>
                      <div className='question-count'>
                          <span>Question{currentQuestion + 1}of {questions.length}</span>
                      </div>
                      <div className='question-text'>
                          {questions[currentQuestion].questionText}
                      </div>
                  </div>
                  <div className='answer-section'>
                      {
                          questions[currentQuestion].answerOption.map((ans, i) => {
                              return <button className={`button ${click & ans.isCorrect?"correct":"button"}`}
                              disabled={click} key={i} onClick={() => handleAnswer(ans.isCorrect)}>{ans.answerText}</button>
                          })
                      }
                      <div className='actions'>
                          <button onClick={handlePlayAgain}>Quit</button>
                          <button disabled={!click} onClick={handleNext}>Next</button>
                      </div>
                  </div>
              </>
              )}
       
      </div>
    </>
  )
}

export default Quiz