// Action types
const COUNTER_ACTIONS = {
  DECREMENT: 'decrement',
  INCREMENT: 'increment',
  SELECT: 'select',
};

// Action generators
export const decrementCounter = (id) => ({ type: COUNTER_ACTIONS.DECREMENT, id });
export const incrementCounter = (id) => ({ type: COUNTER_ACTIONS.INCREMENT, id });
export const selectCounter = (id) => ({ type: COUNTER_ACTIONS.SELECT, id });

export default COUNTER_ACTIONS;
