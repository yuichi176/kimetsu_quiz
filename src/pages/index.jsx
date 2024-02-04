import Link from 'next/link'
import { useState } from 'react'
import HomeModal from '../components/HomeModal'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClickOpen = () => {
    setIsModalOpen(true)
  }

  const handleClickClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='top-main-screen'>
      <div className='top-main-screen-inner'>
        <div className='text1'>
          <p>クイズに答えてあなたの鬼滅力を試しましょう。</p>
          <p>問題に正解することで問題を解放できます。</p>
          <p>全ての問題の解放を目指しましょう。</p>
        </div>
        <Link href='./main'>
          <div className='start_btn'>始める</div>
        </Link>
        <div className='open_crea_question_modal' onClick={handleClickOpen}>
          <label className='trigger_text'>解放した問題を見る</label>
        </div>
      </div>
      {isModalOpen && <HomeModal handleClickClose={handleClickClose} />}
    </div>
  )
}

export default Home
