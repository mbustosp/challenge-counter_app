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
import { getCardinality, getTotalCount } from '../../../utils/counterUtils';

/**
 * Styles
 */
import './CounterList.scss';

const CounterList = ({ counters, selectedCount }) => {
  const items = getCardinality(counters);
  const times = getTotalCount(counters);
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
            title={title}
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
  selectedCount: PropTypes.number,
};

CounterList.defaultProps = {
  selectedCount: 0,
};

export default CounterList;
