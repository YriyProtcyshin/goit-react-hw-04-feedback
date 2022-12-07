import { Component } from 'react';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    return (
      <ul className={css.feedback_list}>
        <li className={css.feedback_list}>
          <button type="button" onClick={() => this.changeFeedback('good')}>
            Good
          </button>
        </li>
        <li className={css.feedback_list}>
          <button type="button" onClick={() => this.changeFeedback('neutral')}>
            Neutral
          </button>
        </li>
        <li className={css.feedback_list}>
          <button type="button" onClick={() => this.changeFeedback('bad')}>
            Bad
          </button>
        </li>
      </ul>
    );
  }
}
