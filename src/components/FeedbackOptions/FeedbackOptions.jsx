import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export function FeedbackOptions({ onClickButton, states }) {
  const keys = Object.keys(states);
  return (
    <ul className={css.feedback_list}>
      {keys.map(key => (
        <li className={css.feedback_list} key={key}>
          <button type="button" onClick={() => onClickButton(key)}>
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  states: PropTypes.object,
  onClickButton: PropTypes.func,
};
