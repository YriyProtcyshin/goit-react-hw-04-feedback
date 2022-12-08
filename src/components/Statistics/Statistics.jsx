import { Component } from 'react';
// import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    return (
      <>        
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        <p>Positive feeeback: {this.props.positivePercentage}</p>
      </>
    );
  }
}
