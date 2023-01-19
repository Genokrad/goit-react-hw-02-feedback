import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <>
      <p>
        Good <span>{good}</span>
      </p>
      <p>
        Neutral <span>{neutral}</span>
      </p>
      <p>
        Bad <span>{bad}</span>
      </p>
      <p>
        Total <span>{total}</span>
      </p>
      <p>
        Positive feedback <span>{positivePercentage}%</span>
      </p>
    </>
  ) : (
    <Notification message="There is no feedback"></Notification>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
