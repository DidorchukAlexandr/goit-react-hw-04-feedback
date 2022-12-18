import PropTypes from 'prop-types';
import { ListBtn, ButtonFeedback } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ListBtn>
      {options.map(option => (
        <li key={option}>
          <ButtonFeedback type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </ButtonFeedback>
        </li>
      ))}
    </ListBtn>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
