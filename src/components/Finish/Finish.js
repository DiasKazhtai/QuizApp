import React from 'react'
import './Finish.css'

const Finish = props => {
    return(
        <div>
            <h1>Тест закончен</h1>
    <p>Количество правильных ответов:<strong> {props.results}</strong></p>
        </div>
    )
}

export default Finish