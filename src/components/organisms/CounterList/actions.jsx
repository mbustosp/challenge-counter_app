// Action types
const COUNTER_LIST_ACTIONS = {
  REQ_PROGRESS: 'req_progress',
  REQ_FAILED: 'req_failed',
  REQ_SUCCESS: 'req_success',
  HIDE_ERROR: 'hide_error',
};

// Action generators
export const reqProgressAction = () => ({ type: COUNTER_LIST_ACTIONS.REQ_PROGRESS });
export const reqFailedAction = (errorMessage, retry) => ({
  type: COUNTER_LIST_ACTIONS.REQ_FAILED,
  errorMessage,
  retry,
});
export const reqSuccessAction = () => ({ type: COUNTER_LIST_ACTIONS.REQ_SUCCESS });
export const hideErrorAction = () => ({ type: COUNTER_LIST_ACTIONS.HIDE_ERROR });

export default COUNTER_LIST_ACTIONS;
