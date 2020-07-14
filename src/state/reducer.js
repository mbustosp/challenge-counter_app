/* eslint-disable no-param-reassign */
import produce from 'immer';
import COUNTER_ACTIONS from './actions';

/**
 * Main Screen action handler.
 * @param state Main Screen State
 * @param action one of the Main Screen compatible actions
 * @returns Updated new state
 */
export default function mainScreenReducer(state, action) {
  switch (action.type) {
    case COUNTER_ACTIONS.DECREMENT:
      return produce(state, ({ counters }) => {
        const index = counters.findIndex((counter) => counter.id === action.id);
        if (index !== -1) counters[index].count -= 1;
      });
    case COUNTER_ACTIONS.INCREMENT:
      return produce(state, ({ counters }) => {
        const index = counters.findIndex((counter) => counter.id === action.id);
        if (index !== -1) counters[index].count += 1;
      });
    case COUNTER_ACTIONS.SELECT:
      return produce(state, ({ counters }) => {
        const index = counters.findIndex((counter) => counter.id === action.id);
        if (index !== -1) counters[index].isSelected = !counters[index].isSelected;
      });
    default:
      throw new Error('Not supported');
  }
}
