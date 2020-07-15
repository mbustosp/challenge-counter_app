// Action types
const COUNTER_ACTIONS = {
  DECREMENT: 'decrement',
  INCREMENT: 'increment',
  DELETE: 'delete',
  SELECT: 'select',
  SEARCH: 'search',
};

// Action generators
export const decrementCounter = (id) => ({ type: COUNTER_ACTIONS.DECREMENT, id });
export const incrementCounter = (id) => ({ type: COUNTER_ACTIONS.INCREMENT, id });
export const selectCounter = (id) => ({ type: COUNTER_ACTIONS.SELECT, id });
export const deleteCounters = (ids) => ({ type: COUNTER_ACTIONS.DELETE, ids });
export const setSearch = (search) => ({ type: COUNTER_ACTIONS.SEARCH, search });

export default COUNTER_ACTIONS;
