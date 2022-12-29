import PropTypes from 'prop-types';
import { Block } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Block>
      {Object.keys(options).map(option => (
        <button onClick={() => onLeaveFeedback(option)} key={option}>
          {option}
        </button>
      ))}
    </Block>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
