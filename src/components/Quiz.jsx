import { useEffect, useState } from "react"

const Quiz = ({ questions, handleAnswer, handleFinish }) => {
  const [questionCount, setQuestionCount] = useState(0)

  useEffect(() => {
    if(questionCount === 10) {
      handleFinish()
    }
  }, [questionCount])

  const clickAnswer = (num) => {
    handleAnswer(num)
    setQuestionCount((old) => old+1)
  }

  return (
    <>
    {questionCount < 10 &&
      <div className='main-screen'>
        <div className='question-screen'>
          <div className='question_no_box'>
            <span className='question_no'>第{questionCount + 1}問</span>
          </div>
          <div className='question_box'>{questions[questionCount].q_sentence}</div>
          <div className='choice_box'>
            <div className='options'>
              <label onClick={() => clickAnswer(0)}>
                <div className='option'>
                  {questions[questionCount].options[0]}
                  <br />
                </div>
              </label>
              <label onClick={() => clickAnswer(1)}>
                <div className='option'>
                  {questions[questionCount].options[1]}
                  <br />
                </div>
              </label>
              <label onClick={() => clickAnswer(2)}>
                <div className='option'>
                  {questions[questionCount].options[2]}
                  <br />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Quiz
