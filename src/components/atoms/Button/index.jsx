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

const Button = ({
  onClick,
  disabled,
  children,
  label,
  className,
  ariaLabel,
  disableFocus,
  onBlur,
}) => {
  return (
    <button
      type="button"
      className={classNames('button', className)}
      onClick={disabled ? null : onClick}
      onKeyUp={(event) => (event.key !== 'Enter' ? onClick() : null)}
      disabled={disabled}
      aria-label={ariaLabel}
      tabIndex={disableFocus ? -1 : 0}
      onBlur={onBlur}
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
  ariaLabel: PropTypes.string,
  disableFocus: PropTypes.bool,
  onBlur: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => true,
  disabled: false,
  children: null,
  className: '',
  label: '',
  ariaLabel: 'Button',
  disableFocus: false,
  onBlur: () => true,
};

export default Button;
