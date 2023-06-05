import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statisctics";
import { Section } from "./Section";
import {Notification} from "./Notification";
import PropTypes from "prop-types";
export class FeedbackComponent extends Component {
    static propTypes = {
      options: PropTypes.arrayOf(PropTypes.string.isRequired),
    };
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    
      handleFeedback = (type) => {
        this.setState((prevState) => ({
          [type]: prevState[type] + 1,
        }));
      };
    
      countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
      };
    
      countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const totalFeedback = this.countTotalFeedback();
        return totalFeedback > 0 ? (good / totalFeedback) * 100 : 0;
      };
      render() {
        const { good, neutral, bad } = this.state;
    
        return (
          <div>
            <Section title="Please Leave a Feedback">
              <FeedbackOptions
                options={["good", "neutral", "bad"]}
                onLeaveFeedback={this.handleFeedback}
              />
            </Section>
    
            <Section title="Statistics">
                {this.countTotalFeedback() > 0 ?
              (<Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />) : (<Notification message="There is no feedback"/>)}
            </Section>
          </div>
        );
      }
    }