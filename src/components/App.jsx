import { useState } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import FeedbackOptions from "./Feedback/FeedbackOptions";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  
 const countFeedback = evt => {
    const nameBtn = evt.target.name.toLowerCase();

switch (nameBtn) {
  case 'good':
    setGood(prevState => prevState + 1);
    break;
  case 'neutral':
    setNeutral(prevState => prevState + 1);
    break;
  case 'bad':
    setBad(prevState => prevState + 1);
    break;
  default:
    return;
   }
  };

   const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    const total = Math.round(
      (good / countTotalFeedback()) * 100
    );
    return total;
  };

    return (
      <section style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          gap: 30,
        }}>
    
      <Section title="Please leave feedback">
        <FeedbackOptions
           options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={countFeedback}/>
      </Section>
      <Section title="Statistics">
          {
          countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
    </section >
  );
};
