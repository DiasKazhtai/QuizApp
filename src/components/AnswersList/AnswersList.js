import React from 'react'
import './AnswersList.css'


const AnswersList = props => {
    


    return(
        <ul className={'AnswersList'}>
            {props.answer.map((answer, index) => {
                return ( 
                    <li id={answer.id} onClick={props.idShower}  key={index}>
                        {answer.text}
                     </li>
                )
            })}
        </ul>
    )
}

export default AnswersList