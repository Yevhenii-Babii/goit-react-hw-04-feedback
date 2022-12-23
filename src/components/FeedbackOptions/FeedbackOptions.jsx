import PropTypes from 'prop-types';
import { Block } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Block>
      {options.map(id => (
        <button onClick={() => onLeaveFeedback(id)} key={id}>
          {id}
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
