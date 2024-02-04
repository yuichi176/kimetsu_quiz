import { Close } from '@mui/icons-material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ResultModal = ({ questions, result, handleClickClose }) => {
  var ansList = []
  for (let i = 0; i < 10; i++) {
    if (result[i] == true) {
      ansList.push(
        <tr className='ans_set' key={i}>
          <td>
            <PanoramaFishEyeIcon sx={{color:'red'}} pt={1}/>
          </td>
          <td>{questions[i].q_sentence}</td>
          <td>{questions[i].options[questions[i].answer]}</td>
        </tr>,
      )
    } else {
      ansList.push(
        <tr className='ans_set' key={i}>
          <td>
            <Close sx={{color:'blue'}} />
          </td>
          <td>{questions[i].q_sentence}</td>
          <td>{questions[i].options[questions[i].answer]}</td>
        </tr>,
      )
    }
  }

  const clickClose = () => {
    handleClickClose()
  }

  return (
    <div className='answer-modal'>
      <div className='answer-modal-inner'>
        <div className='answer-modal-content'>
          <div className='answer-modal-close-btn'>
            <Close onClick={handleClickClose} sx={{cursor:'pointer'}}/>
          </div>
          <table>
            <tr className='ans_set'>
              <th></th>
              <th>問題</th>
              <th>解答</th>
            </tr>
            {ansList}
          </table>
        </div>
      </div>
    </div>
  )
}

export default ResultModal
