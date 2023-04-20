import PropTypes from 'prop-types';
import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = { ...this.props };

  addFeedback = feedback => {
    this.setState(state => ({ [feedback]: state[feedback] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () => {
    const PositiveFeedbackPercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return PositiveFeedbackPercentage
      ? `${PositiveFeedbackPercentage}%`
      : 'There are no positive feedbacks!';
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={this.addFeedback}
          options={Object.keys(this.state)}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            feedbacks={this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}

        <GlobalStyle />
      </Section>
    );
  }
}

Statistics.propTypes = {
  defaultProps: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
};
