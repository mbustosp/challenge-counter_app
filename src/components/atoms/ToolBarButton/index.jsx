/**
 * Core dependencies
 */
import React from 'react';
import classNames from 'classnames';
import Button from '../Button';

/**
 * Styles
 */
import './ToolBarButton.scss';

const ToolBarButton = ({
  onClick,
  onBlur,
  label,
  className,
  disabled,
  children,
  ariaLabel,
  lightTheme,
}) => {
  return (
    <Button
      className={classNames(
        'button-toolbar',
        { 'button-toolbar--disabled': disabled },
        { 'button-toolbar--light': lightTheme },
        className,
      )}
      onClick={onClick}
      label={label}
      disabled={disabled}
      ariaLabel={ariaLabel}
      onBlur={onBlur}
    >
      {children}
    </Button>
  );
};

ToolBarButton.propTypes = { ...Button.propTypes };

export default ToolBarButton;
