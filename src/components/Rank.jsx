const Rank = (sumCorrect) => {

  const renderRank = ({ sumCorrect }) => {
    if (sumCorrect < 3) {
      return (
        <div className='class_text'>
          <span>鬼殺隊隊士級</span>
        </div>
      )
    } else if (sumCorrect < 5) {
      return (
        <div className='class_text'>
          <span>継子級</span>
        </div>
      )
    } else if (sumCorrect < 7) {
      return (
        <div className='class_text'>
          <span>下弦の鬼級</span>
        </div>
      )
    } else if (sumCorrect < 9) {
      return (
        <div className='class_text'>
          <span>柱級</span>
        </div>
      )
    } else if (sumCorrect < 10) {
      return (
        <div className='class_text'>
          <span>上弦の鬼級</span>
        </div>
      )
    } else if (sumCorrect === 10) {
      return (
        <div className='class_text'>
          <span>無惨級</span>
        </div>
      )
    }
  }

  return (
    <>
      {renderRank(sumCorrect)}
    </>
    )
  
}

export default Rank
