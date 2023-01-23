import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button key={nanoid()} type="button" onClick={onLeaveFeedback}>
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      options: PropTypes.string.isRequired,
    }).isRequired
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
