/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Styles
 */
import './Button.scss';

const Button = ({ onClick, disabled, children, label, className }) => {
  return (
    <button
      type="button"
      className={classNames('button', className)}
      onClick={disabled ? null : onClick}
      disabled={disabled}
    >
      {label || children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => true,
  disabled: false,
  children: null,
  className: '',
  label: '',
};

export default Button;
