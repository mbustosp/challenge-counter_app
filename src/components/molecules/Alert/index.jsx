/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Styles
 */
import './Alert.scss';

const Alert = ({ title, message, children }) => {
  return (
    <div className="alert">
      <div className="alert__content">
        <h1 className="alert__content__title">{title}</h1>
        <div className="alert__content__message">{message}</div>
        <div className="alert__content__action">{children}</div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.node,
};

Alert.defaultProps = {
  title: '',
  message: '',
  children: null,
};

export default Alert;
