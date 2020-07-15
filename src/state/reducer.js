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
  let index = -1;
  switch (action.type) {
    case COUNTER_ACTIONS.DECREMENT:
      index = draft.counters.findIndex((counter) => counter.id === action.id);
      if (index !== -1) draft.counters[index].count -= 1;
      break;
    case COUNTER_ACTIONS.INCREMENT:
      index = draft.counters.findIndex((counter) => counter.id === action.id);
      if (index !== -1) draft.counters[index].count += 1;
      break;
    case COUNTER_ACTIONS.SELECT:
      index = draft.counters.findIndex((counter) => counter.id === action.id);
      if (index !== -1) draft.counters[index].isSelected = !draft.counters[index].isSelected;
      break;
    case COUNTER_ACTIONS.DELETE:
      draft.counters = draft.counters.filter((counter) => !action.ids.includes(counter.id));
      break;
    case COUNTER_ACTIONS.SEARCH:
      draft.search = action.search;
      break;
    default:
      throw new Error('Not supported');
  }
});

export default reducer;
