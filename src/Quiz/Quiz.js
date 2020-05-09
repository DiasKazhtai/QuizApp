import React, {Component} from 'react'
import './Quiz.css'
import AnswersList from '../components/AnswersList/AnswersList'
// import ActiveQuestion from '../components/ActiveQuestion/ActiveQuestion'
import Finish from '../components/Finish/Finish'


class Quiz extends Component {

    state = {
        quiz:[
            {
            question:'Какого цвета небо?',
            rightAnswerId: 2,
            answers:[
                {text: 'Красный', id: 1},
                {text: 'Синий', id: 2},
                {text: 'Желтый', id: 3},
                {text: 'Зеленый', id: 4},
                
            ],
            id: 1
        },
        {
            question:'В каком году началась 2 мировая война?',
            rightAnswerId: 3,
            answers:[
                {text: '1940', id: 1},
                {text: '1941', id: 2},
                {text: '1939', id: 3},
                {text: '1938', id: 4},
                
            ],
            id: 2
        }
        ],
        counter: 0,
        finished: false,
        results:0
    }



    idShow = (event) =>{
      if(event.target.id == this.state.quiz[this.state.counter].rightAnswerId ){
          this.state.quiz[0] = this.state.quiz[this.state.counter + 1]
          
          console.log(this.state.results)
          if(this.state.counter == this.state.quiz.length - 1){
            this.setState({
                finished:true,
                results: this.state.results + 1
                
            })
        }else {
                this.setState({
                    counter: this.state.counter + 1,
                    results: this.state.results + 1
            })
        }
          
    }else {
        this.state.quiz[0] = this.state.quiz[this.state.counter + 1]
        if(this.state.counter == this.state.quiz.length - 1){
          this.setState({
              finished:true
          })
      }else {
              this.setState({
                  counter: this.state.counter + 1
          })
      }
        
  }
}

    render (){
        return(
            <div className={'Quiz'}>
                <h1>Ответьте на все вопросы</h1>
                {this.state.quiz[this.state.counter].question}
                {/* <ActiveQuestion questionId ={this.state.quiz.length}/> */}
               <div>
               {!this.state.finished ? <AnswersList  idShower={this.idShow} 
                answer={this.state.quiz[0].answers}/>
                : <Finish results={this.state.results}/> }
               </div>
                 
               
            </div>
        )
    }
}

export default Quiz