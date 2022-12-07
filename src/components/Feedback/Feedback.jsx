import { Component } from "react";
import css from './Feedback.module.css'


// comment
export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    changeFeedback = (name)=> {
       this.setState(prevState => 
       ( {
            [name]: prevState[name] + 1
        })
        )
    }

    countTotalFeedback = ()=>{
        const {good , neutral, bad} = this.state
        return (
             good + neutral + bad
        )
    }

    countPositiveFeedbackPercentage = ()=> {
        const {good } = this.state
        console.log(this.countTotalFeedback()/good )
        return (   `${Math.floor(good/this.countTotalFeedback() * 100)} %`)
      
    }

    render(){
        return (<div className={css.feedback}>

            <h1>Please leave feedback</h1>
            <ul className={css.feedback_list}>
                <li className={css.feedback_list}><button type="button"  onClick={() => this.changeFeedback('good')}>Good</button></li>
                <li className={css.feedback_list}><button type="button"  onClick={() => this.changeFeedback('neutral')}>Neutral</button></li>
                <li className={css.feedback_list}><button type="button"  onClick={() => this.changeFeedback('bad')}>Bad</button></li>
            </ul>
            <h2>Statistics</h2>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>Positive feeeback: {this.countPositiveFeedbackPercentage()}</p>



        </div>)
    }
} 