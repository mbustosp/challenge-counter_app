/**
 * Core dependencies
 */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Counter from '../../molecules/Counter';
import RefreshIndicator from '../../atoms/RefreshIndicator';

/**
 * State
 */
import mainScreenContext from '../../../state/context';
import { decrementCounter, incrementCounter, selectCounter } from '../../../state/actions';
import { getCardinality, getSelectedCount, getTotalCount } from '../../../utils/counterUtils';

/**
 * Styles
 */
import './CounterList.scss';

const CounterList = ({ counters }) => {
  const items = getCardinality(counters);
  const times = getTotalCount(counters);
  const selectedCount = getSelectedCount(counters);
  const { dispatch } = useContext(mainScreenContext);

  return (
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
          <RefreshIndicator onClick={() => true} />
        </div>
      </div>
      <div className="counter-list__counters">
        {counters.map(({ id, title, count, isSelected }) => (
          <Counter
            key={id}
            id={id}
            name={title}
            value={count}
            isSelected={isSelected}
            onSelection={() => dispatch(selectCounter(id))}
            onIncrease={() => dispatch(incrementCounter(id))}
            onDecrease={() => dispatch(decrementCounter(id))}
          />
        ))}
      </div>
    </div>
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
};

export default CounterList;
