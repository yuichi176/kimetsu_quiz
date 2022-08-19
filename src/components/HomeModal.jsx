import { Close } from '@mui/icons-material';
import { questionSet } from '../assets/questionSet'
import { useSelector } from 'react-redux'

const HomeModal = ({ handleClickClose }) => {
  const openQuestions = useSelector((state) => state.question.openQuestions)

  var creaQuestionList = []
  for (let i = 0; i < 50; i++) {
    if (openQuestions[i] === true) {
      creaQuestionList.push(
        <tr className='crea_question_set'>
          <td>No.{i + 1}</td>
          <td>{questionSet[i].q_sentence}</td>
          <td>{questionSet[i].options[questionSet[i].answer]}</td>
        </tr>,
      )
    } else {
      creaQuestionList.push(
        <tr className='crea_question_set'>
          <td>No.{i + 1}</td>
          <td>???</td>
          <td>???</td>
        </tr>,
      )
    }
  }

  const clickClose = () => {
    handleClickClose()
  }

  return (
    <div className='crea_question_modal'>
      <div className='crea_question_modal-inner'>
        <div className='crea_question_modal-content'>
          <div className='modal-close-btn'>
            <Close onClick={clickClose} sx={{cursor:'pointer'}}/>
          </div>
          <table>
            <tr className='crea_question_set'>
              <th className='NoCol'></th>
              <th className='QuestionCol'>問題</th>
              <th className='AnswerCol'>解答</th>
            </tr>
            {creaQuestionList}
          </table>
        </div>
      </div>
    </div>
  )
}

export default HomeModal
