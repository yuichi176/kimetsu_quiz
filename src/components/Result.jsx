import Link from 'next/link'
import { useState } from 'react'
import Hierarchie from './Hierarchie'
import Rank from './Rank'
import ResultModal from './ResultModal'

const Result = ({ questions, answers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const result = answers.map((num, index) => {
    if (num === questions[index].answer) {
      return true
    } else {
      return false
    }
  })
  const sumCorrect = result.filter((t) => t == true).length

  const handleClickOpen = () => {
    setIsModalOpen(true)
  }

  const handleClickClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='result'>
      {/* {console.log(questions)}
      {console.log(answers)}
      {console.log(result)}
      {console.log(sumCorrect)} */}
      <div className='result-inner'>
        <div className='result-text'>
          {sumCorrect}問正解でした。 あなたの鬼滅力は・・・
          <Rank sumCorrect={sumCorrect} />
        </div>
        <Hierarchie sumCorrect={sumCorrect} />
        <Link href='/'>
          <div className='retry_btn'>再挑戦</div>
        </Link>
        <div className='print_answer'>
          <span className='print_answer_text' onClick={handleClickOpen}>
            解答をみる
          </span>
        </div>
      </div>
      {isModalOpen && <ResultModal questions={questions} result={result} handleClickClose={handleClickClose} />}
    </div>
  )
}

export default Result
