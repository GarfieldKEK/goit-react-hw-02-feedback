import React, { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statisctics";
import { Section } from "./Section";
import { Notification } from "./Notification";
import PropTypes from "prop-types";

export const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0 ? (good / totalFeedback) * 100 : 0;
  };

  return (
    <div>
      <Section title="Please Leave a Feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};




FeedbackComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};