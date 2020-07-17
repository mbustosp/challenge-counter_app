/**
 * Core dependencies
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { HotKeys } from 'react-hotkeys';
import classNames from 'classnames';
import OperatorButton, { OPERATION_TYPE } from '../../atoms/OperatorButton';

/**
 * Styles
 */
import './Counter.scss';

const Counter = ({
  id,
  title,
  value,
  isSelected,
  onIncrease,
  onDecrease,
  onDelete,
  onSelection,
}) => {
  const ref = useRef(null);
  const deleteCounter = () => onDelete(id);
  const increaseCounter = () => onIncrease({ id, value, title });
  const decreaseCounter = () => (value > 0 ? onDecrease({ id, value, title }) : null);
  const select = () => onSelection(id);

  const keyMap = {
    DELETE: ['del'],
    INCREASE: ['+'],
    DECREASE: ['-'],
    SELECT: ['s'],
  };

  const handlers = {
    DELETE: deleteCounter,
    INCREASE: increaseCounter,
    DECREASE: decreaseCounter,
    SELECT: select,
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers} allowChanges>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        key={id}
        tabIndex={0}
        role="menuitem"
        onClick={select}
        ref={ref}
        className={classNames('counter', { 'counter--selected': isSelected })}
      >
        <div className="counter__name">{title}</div>
        <div className="counter__actions">
          <OperatorButton
            className="counter__actions__operator"
            onClick={decreaseCounter}
            operation={OPERATION_TYPE.MINUS}
            disabled={value <= 0}
            ariaLabel="Decrease Value"
            disableFocus
          />
          <div className="counter__actions__value">{value}</div>
          <OperatorButton
            className="counter__actions__operator"
            onClick={increaseCounter}
            operation={OPERATION_TYPE.PLUS}
            ariaLabel="Increase Value"
            disableFocus
          />
        </div>
      </div>
    </HotKeys>
  );
};

Counter.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  value: PropTypes.number,
  isSelected: PropTypes.bool,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  onDelete: PropTypes.func,
  onSelection: PropTypes.func,
};

Counter.defaultProps = {
  title: '',
  value: 0,
  isSelected: false,
  onIncrease: () => true,
  onDecrease: () => true,
  onDelete: () => true,
  onSelection: () => true,
};

export default Counter;
