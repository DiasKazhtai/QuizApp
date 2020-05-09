import React from 'react'
import './ActiveQuestion.css'


const ActiveQuestion = props => {
    return (
    <p> {props.currentQ} из {props.questionId}</p>
    )
}

export default ActiveQuestion