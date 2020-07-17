/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import ActionButton from '../../atoms/ActionButton';

/**
 * Styles
 */
import './ErrorAlert.scss';

const ErrorAlert = ({ title, onDismiss, onRetry }) => {
  return (
    <Alert title={title} message="The internet connection appears to be offline">
      <div className="error-alert__actions">
        <ActionButton className="error-alert__button-retry" onClick={onRetry} label="Retry" />
        <ActionButton
          className="error-alert__button-dismiss"
          onClick={onDismiss}
          label="Dismiss"
          lightTheme
        />
      </div>
    </Alert>
  );
};

ErrorAlert.propTypes = {
  title: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default ErrorAlert;
