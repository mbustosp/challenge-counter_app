/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../atoms/ActionButton';

/**
 * Styles
 */
import './LoadingError.scss';

const LoadingError = ({ retry }) => {
  return (
    <div className="loading-error">
      <div className="loading-error__container">
        <h1 className="loading-error__title">Couldn’t load the counters</h1>
        <p className="loading-error__status">The Internet connection appears to be offline.</p>
        <ActionButton className="loading-error__button" lightTheme onClick={retry} label="Retry" />
      </div>
    </div>
  );
};

LoadingError.propTypes = {
  retry: PropTypes.func.isRequired,
};

export default LoadingError;
