import PropTypes from 'prop-types';
import { FeedbackNotify } from './Notification.styled';

export default function Notification({ message }) {
  return <FeedbackNotify>{message}</FeedbackNotify>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
