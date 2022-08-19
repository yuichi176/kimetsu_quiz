import { useEffect, useState } from 'react'
import Result from '../../components/Result'
import Quiz from '../../components/Quiz'
import { questionSet } from '../../assets/questionSet'
import { arrayShuffle } from '../../utils'

const Main = () => {
  const [isFinish, setIsFinish] = useState(false)
  const [questions, setQuestions] = useState(questionSet)
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    setQuestions(arrayShuffle([...questionSet]).slice(0, 10))
  }, [])

  const handleAnswer = (num) => {
    setAnswers((old) => [...old, num])
  }

  const handleFinish = () => {
    setIsFinish(true)
  }

  return (
    <>
      {!isFinish ? (
        <Quiz questions={questions} handleAnswer={handleAnswer} handleFinish={handleFinish} />
      ) : (
        <Result questions={questions} answers={answers} />
      )}
    </>
  )
}

export default Main
