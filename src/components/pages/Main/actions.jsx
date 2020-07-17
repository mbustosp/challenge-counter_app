// Action types
const COUNTER_ACTIONS = {
  SET_COUNT: 'set_count',
  DELETE: 'delete',
  SELECT: 'select',
  SEARCH: 'search',
  SEARCH_ACTIVE: 'search_active',
  LOAD: 'load',
  SUCCESSFUL_LOAD: 'successful_load',
  FAILED_LOAD: 'failed_load',
  REFRESH: 'refresh',
};

// Action generators
export const setCountAction = ({ id, count }) => ({ type: COUNTER_ACTIONS.SET_COUNT, id, count });
export const selectCounterAction = (id) => ({ type: COUNTER_ACTIONS.SELECT, id });
export const deleteCountersAction = (ids) => ({ type: COUNTER_ACTIONS.DELETE, ids });
export const setSearchAction = (search) => ({ type: COUNTER_ACTIONS.SEARCH, search });
export const setSearchActiveAction = (shouldBeActive) => ({
  type: COUNTER_ACTIONS.SEARCH_ACTIVE,
  shouldBeActive,
});
export const loadCountersAction = () => ({ type: COUNTER_ACTIONS.LOAD });
export const failedLoadAction = () => ({ type: COUNTER_ACTIONS.FAILED_LOAD });
export const successfulLoadAction = (counters) => ({
  type: COUNTER_ACTIONS.SUCCESSFUL_LOAD,
  counters,
});
export const refreshCountersAction = () => ({ type: COUNTER_ACTIONS.REFRESH });

export default COUNTER_ACTIONS;
