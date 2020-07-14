/**
 * Core dependencies
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';

/**
 * Styles
 */
import './OperatorButton.scss';

export const OPERATION_TYPE = {
  PLUS: 'PLUS',
  MINUS: 'MINUS',
};

const OperatorButton = ({ onClick, className, operation, disabled, ariaLabel }) => {
  return (
    <Button
      className={classNames(
        'button-operator',
        { 'button-operator--disabled': disabled },
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      ariaLabel={ariaLabel}
    >
      {operation === OPERATION_TYPE.PLUS ? (
        <span className="icon icon-plus" />
      ) : (
        <span className="icon icon-minus" />
      )}
    </Button>
  );
};

OperatorButton.propTypes = {
  ...Button.propTypes,
  operation: PropTypes.oneOf(Object.values(OPERATION_TYPE)),
};

OperatorButton.defaultProps = {
  ...Button.defaultProps,
  operation: OPERATION_TYPE.PLUS,
};

export default OperatorButton;
