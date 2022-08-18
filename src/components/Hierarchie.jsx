import taisi from '../assets/images/taisi.jpg'
import tuguko from '../assets/images/tuguko.jpg'
import kagen from '../assets/images/kagen.jpg'
import hasira from '../assets/images/hasira.jpg'
import jougen from '../assets/images/jougen.jpg'
import muzan from '../assets/images/muzan.jpg'
import Image from 'next/image'

const Hierarchie = ({ sumCorrect }) => {
  const renderHierarchie = (sumCorrect) => {
    if (sumCorrect < 3) {
      return (
        <div className='result-image-box'>
          <Image src={taisi} width={400} height={350} />
        </div>
      )
    } else if (sumCorrect < 5) {
      return (
        <div className='result-image-box'>
          <Image src={tuguko} width={400} height={350} />
        </div>
      )
    } else if (sumCorrect < 7) {
      return (
        <div className='result-image-box'>
          <Image src={kagen} width={400} height={350} />
        </div>
      )
    } else if (sumCorrect < 9) {
      return (
        <div className='result-image-box'>
          <Image src={hasira} width={400} height={350} />
        </div>
      )
    } else if (sumCorrect < 10) {
      return (
        <div className='result-image-box'>
          <Image src={jougen} width={400} height={350} />
        </div>
      )
    } else if (sumCorrect === 10) {
      return (
        <div className='result-image-box'>
          <Image src={muzan} width={400} height={100} />
        </div>
      )
    }
  }

  return <>{renderHierarchie(sumCorrect)}</>
}

export default Hierarchie
