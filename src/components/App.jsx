import React from 'react';
import { Statistics } from './Statistics/statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notifactions/Notifactoins';
import { useState } from 'react';

export function App ()  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0)

 const  onLeaveFeedback = key => {
    if (key === `good`) {setGood (prevState => prevState + 1) }; 
      if(key === `neutral`) { setNeutral(prevState => prevState + 1)};
      if(key === `bad`) { setBad(prevState => prevState + 1) };
  }
    

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return parseInt((good / countTotalFeedback()) * 100 || 0);
  };

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  
  return(
    <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={{bad,neutral,good}}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    
  )
}





// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = id => {
//     this.setState(prevState => {
//       return {
//         [id]: prevState[id] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return parseInt((this.state.good / this.countTotalFeedback()) * 100 || 0);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positiveFeedback={positiveFeedback}
//             ></Statistics>
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
