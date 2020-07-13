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

const CancelButton = ({ onClick, label, className, disabled }) => {
  return (
    <Button
      className={classNames('button-cancel', { 'button-cancel--disabled': disabled }, className)}
      onClick={onClick}
      label={label}
      disabled={disabled}
    />
  );
};

CancelButton.propTypes = { ...Button.propTypes };

export default CancelButton;
