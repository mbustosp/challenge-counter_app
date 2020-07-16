/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Styles
 */
import './SplashTemplate.scss';

const SplashTemplate = ({ children }) => {
  return (
    <div className="splash">
      <div className="splash__content">{children}</div>
    </div>
  );
};

SplashTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SplashTemplate;
