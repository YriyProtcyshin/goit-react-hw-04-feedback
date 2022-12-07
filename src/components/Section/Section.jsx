import { Component } from 'react';
import css from './Section.module.css';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';

export class Section extends Component {
  render() {
    const title = this.props.title;

    return (
      <div className={css.feedback}>
        <h1>{title}</h1>
        <FeedbackOptions onClickButton={this.props.onClickButton} />
        <Statistics
          good={this.props.good}
          neutral={this.props.neutral}
          bad={this.props.bad}
          total={this.props.total}
          positivePercentage={this.props.positivePercentage}
        />
      </div>
    );
  }
}
