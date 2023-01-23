import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const target = event.target.innerText.toLowerCase();
    this.setState(prevState => {
      return {
        [target]: prevState[target] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const {
      state,
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    let rank = countTotalFeedback();
    let precent = countPositiveFeedbackPercentage();
    const newOption = Object.keys(state);
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onLeaveFeedback={onLeaveFeedback}
            options={newOption}
          />
        </Section>
        <Section title={'Statistics'}>
          {rank ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={rank}
              positivePercentage={precent}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
