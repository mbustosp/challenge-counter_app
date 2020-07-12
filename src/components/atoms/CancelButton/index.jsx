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

const CancelButton = ({ onClick, label, className }) => {
  return (
    <Button className={classNames('button--cancel', className)} onClick={onClick} label={label} />
  );
};

CancelButton.propTypes = { ...Button.propTypes };

export default CancelButton;
