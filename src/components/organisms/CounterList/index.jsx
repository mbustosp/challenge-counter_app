/**
 * Core dependencies
 */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Counter from '../../molecules/Counter';
import RefreshIndicator from '../../atoms/RefreshIndicator';
import { decreaseCounter, increaseCounter } from '../../../services/counterService';
import ErrorAlert from '../../molecules/ErrorAlert';
import { getCardinality, getTotalCount } from '../../../utils/counterUtils';
import reducer, { initialState } from './reducer';
import { hideErrorAction, reqFailedAction, reqProgressAction, reqSuccessAction } from './actions';

/**
 * Styles
 */
import './CounterList.scss';

const CounterList = ({
  counters,
  selectedCount,
  isRefreshing,
  onRefresh,
  onSelect,
  onIncrease,
  onDecrease,
}) => {
  const items = getCardinality(counters);
  const times = getTotalCount(counters);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { reqFailed, retry, errorMessage } = state;

  const requestIncreaseCounter = (counter) => {
    const { id, value, title } = counter;
    dispatch(reqProgressAction());

    increaseCounter(
      (reqCounter) => {
        dispatch(reqSuccessAction());
        onIncrease(reqCounter);
      },
      () => {
        dispatch(
          reqFailedAction(`Couldn't update ${title} to ${value + 1}`, () =>
            requestIncreaseCounter({ ...counter }),
          ),
        );
      },
    )(id);
  };

  const requestDecreaseCounter = (counter) => {
    const { id, value, title } = counter;
    dispatch(reqProgressAction());
    decreaseCounter(
      (reqCounter) => {
        dispatch(reqSuccessAction());
        onDecrease(reqCounter);
      },
      () => {
        dispatch(
          reqFailedAction(`Couldn't update ${title} to ${value - 1}`, () =>
            requestDecreaseCounter(counter),
          ),
        );
      },
    )(id);
  };

  return (
    <>
      {reqFailed ? (
        <ErrorAlert
          onDismiss={() => dispatch(hideErrorAction())}
          onRetry={retry}
          title={errorMessage}
        />
      ) : null}
      <div className="counter-list">
        <div className="counter-list__status">
          {selectedCount ? (
            <div className="counter-list__status__selected">{`${selectedCount} selected`}</div>
          ) : (
            <>
              <h1 className="h1--selected-group counter-list__status__items">{`${items} items`}</h1>
              <div className="counter-list__status__times">{`${times} times`}</div>
            </>
          )}

          <div className="counter-list__status__refresh">
            <RefreshIndicator isActive={isRefreshing} onClick={onRefresh} />
          </div>
        </div>
        <div className="counter-list__counters">
          <div className="counter-list__counters_container">
            {counters.map(({ id, title, count, isSelected }) => (
              <Counter
                key={id}
                id={id}
                title={title}
                value={count}
                isSelected={isSelected}
                onSelection={onSelect}
                onIncrease={(counter) => requestIncreaseCounter(counter)}
                onDecrease={(counter) => requestDecreaseCounter(counter)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

CounterList.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      count: PropTypes.number,
      isSelected: PropTypes.bool,
    }),
  ).isRequired,
  selectedCount: PropTypes.number,
  onRefresh: PropTypes.func,
  onSelect: PropTypes.func,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  isRefreshing: PropTypes.bool,
};

CounterList.defaultProps = {
  selectedCount: 0,
  onRefresh: () => true,
  onSelect: () => true,
  onIncrease: () => true,
  onDecrease: () => true,
  isRefreshing: false,
};

export default CounterList;
