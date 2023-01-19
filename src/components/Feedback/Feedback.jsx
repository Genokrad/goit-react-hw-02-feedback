import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';

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

    return (
      <div>
        <Section title={'Please leave feedback'}>
          {Object.keys(state).map(options => {
            return (
              <FeedbackOptions
                key={options}
                options={options}
                onLeaveFeedback={onLeaveFeedback}
              />
            );
          })}
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={rank}
            positivePercentage={precent}
          />
        </Section>
      </div>
    );
  }
}
