import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackScores = { good, neutral, bad };

  const changeValue = name => {
    console.log(name);
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good !== 0) {
      return `${Math.floor((good / countTotalFeedback()) * 100)} %`;
    } else {
      return 0;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onClickButton={changeValue} states={feedbackScores} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   changeValue = name => {
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     if (good !== 0) {
//       return `${Math.floor((good / this.countTotalFeedback()) * 100)} %`;
//     } else {
//       return 0;
//     }
//   };

//   render() {
//     const countTotalFeedback = this.countTotalFeedback();
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             onClickButton={this.changeValue}
//             states={this.state}
//           />
//         </Section>
//         <Section title="Statistics">
//           {countTotalFeedback > 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={countTotalFeedback}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
