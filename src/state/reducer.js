/* eslint-disable no-param-reassign */
import produce from 'immer';
import COUNTER_ACTIONS from './actions';

/**
 * Main Screen action handler.
 * @param state Main Screen State
 * @param action one of the Main Screen compatible actions
 * @returns Updated new state
 */
const reducer = produce((draft, action) => {
  const { counters } = draft;
  let index = -1;
  switch (action.type) {
    case COUNTER_ACTIONS.DECREMENT:
      index = counters.findIndex((counter) => counter.id === action.id);
      if (index !== -1) counters[index].count -= 1;
      break;
    case COUNTER_ACTIONS.INCREMENT:
      index = counters.findIndex((counter) => counter.id === action.id);
      if (index !== -1) counters[index].count += 1;
      break;
    case COUNTER_ACTIONS.SELECT:
      index = counters.findIndex((counter) => counter.id === action.id);
      if (index !== -1) counters[index].isSelected = !counters[index].isSelected;
      break;
    default:
      throw new Error('Not supported');
  }
});

export default reducer;
