/**
 * Core dependencies
 */
import React from 'react';
import classNames from 'classnames';
import Button from '../Button';

/**
 * Styles
 */
import './OvalButton.scss';

const OvalButton = ({ onClick, label, className, disabled, children }) => {
  return (
    <Button
      className={classNames('oval-button', { 'oval-button--disabled': disabled }, className)}
      onClick={onClick}
      label={label}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

OvalButton.propTypes = { ...Button.propTypes };

export default OvalButton;
