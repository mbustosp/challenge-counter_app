/**
 * Core dependencies
 */
import React from 'react';
import classNames from 'classnames';
import Button from '../Button';

/**
 * Styles
 */
import './CancelButton.scss';

const CancelButton = ({ onClick, label, className, disabled, children }) => {
  return (
    <Button
      className={classNames('button-cancel', { 'button-cancel--disabled': disabled }, className)}
      onClick={onClick}
      label={label}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

CancelButton.propTypes = { ...Button.propTypes };

export default CancelButton;
