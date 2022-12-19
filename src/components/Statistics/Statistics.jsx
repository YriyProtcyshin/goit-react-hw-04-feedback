import PropsTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feeeback: {positivePercentage}</p>
    </>
  );
}

Statistics.propTypes = {
  good: PropsTypes.number,
  neutral: PropsTypes.number,
  bad: PropsTypes.number,
};
