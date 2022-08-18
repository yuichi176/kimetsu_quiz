import Link from 'next/link'

const Home = () => {

  return(
    <div className="top-main-screen">
        <div className="top-main-screen-inner">
            <div className="text1">
                クイズに答えてあなたの鬼滅力を試しましょう。
            </div>
            <Link href="./main">
              <div className="start_btn" >
                  始める
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Home