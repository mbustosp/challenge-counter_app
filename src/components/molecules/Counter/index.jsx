/**
 * Core dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FocusWithin } from '@component-driven/react-focus-within';
import { HotKeys } from 'react-hotkeys';
import OperatorButton, { OPERATION_TYPE } from '../../atoms/OperatorButton';

/**
 * Styles
 */
import './Counter.scss';

const Counter = ({ id, name, value, onIncrease, onDecrease, onDelete, onSelection }) => {
  const keyMap = {
    DELETE: ['del'],
    INCREASE: ['+'],
    DECREASE: ['-'],
  };

  const handlers = {
    DELETE: () => onDelete(id),
    INCREASE: () => onIncrease(id),
    DECREASE: () => (value > 0 ? onDecrease(id) : null),
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <FocusWithin onFocus={() => onSelection(id)}>
        <div key={id} tabIndex={0} role="menuitem" className="counter">
          <div className="counter__name">{name}</div>
          <div className="counter__actions">
            <OperatorButton
              className="counter__actions__operator"
              onClick={() => onDecrease(id)}
              operation={OPERATION_TYPE.MINUS}
              disabled={value <= 0}
              ariaLabel="Decrease Value"
            />
            <div className="counter__actions__value">{value}</div>
            <OperatorButton
              className="counter__actions__operator"
              onClick={() => onIncrease(id)}
              operation={OPERATION_TYPE.PLUS}
              ariaLabel="Increase Value"
            />
          </div>
        </div>
      </FocusWithin>
    </HotKeys>
  );
};

Counter.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  onDelete: PropTypes.func,
  onSelection: PropTypes.func,
};

Counter.defaultProps = {
  name: '',
  value: 0,
  onIncrease: () => true,
  onDecrease: () => true,
  onDelete: () => true,
  onSelection: () => true,
};

export default Counter;
