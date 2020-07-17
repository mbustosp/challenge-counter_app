/**
 * Core dependencies
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from '../../molecules/Alert';
import ActionButton from '../../atoms/ActionButton';
import { deleteCounters } from '../../../services/counterService';
import ErrorAlert from '../../molecules/ErrorAlert';

/**
 * Styles
 */
import './DeleteAlert.scss';

const DeleteAlert = ({ counters, onCompleted, onClose }) => {
  const [inProgress, setInProgress] = useState(false);
  const [hasFailed, setError] = useState(false);

  const title = counters.length > 1 ? `some of the ${counters.length}` : counters[0].title;

  const deleteCounter = () => {
    setInProgress(true);
    setError(false);
    deleteCounters(onCompleted, () => setError(true))(counters);
  };

  return hasFailed ? (
    <ErrorAlert onDismiss={onClose} onRetry={deleteCounter} title={`Couldn't delete "${title}"`} />
  ) : (
    <Alert
      title={`Delete the "${title}" counter${counters.length > 1 ? 's' : ''}?`}
      message="This can not be undone"
      onClose={onClose}
    >
      <div className="delete-alert__actions">
        <ActionButton className="delete-alert__button-cancel" onClick={onClose} label="Cancel" />
        <ActionButton
          className="delete-alert__button-delete"
          onClick={deleteCounter}
          label="Delete"
          disabled={inProgress}
          lightTheme
        />
      </div>
    </Alert>
  );
};

DeleteAlert.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      count: PropTypes.number,
    }),
  ).isRequired,
  onCompleted: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteAlert;
