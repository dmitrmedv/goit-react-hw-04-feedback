import { useState } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';

export const FeedBack = () => {
  const [good, goodValue] = useState(0);
  const [neutral, neutralValue] = useState(0);
  const [bad, badValue] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handleChengeValue = event => {
    switch (event.target.dataset.name) {
      case 'good':
        goodValue(good + 1);
        break;

      case 'neutral':
        neutralValue(neutral + 1);
        break;

      case 'bad':
        badValue(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          handleChengeValue={handleChengeValue}
        />
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <NotificationMessage message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
