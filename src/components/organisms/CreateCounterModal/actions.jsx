// Action types
const CREATE_COUNTER_ACTIONS = {
  REQ_PROGRESS: 'req_progress',
  REQ_FAILED: 'req_failed',
  REQ_SUCCESS: 'req_success',
  HIDE_ERROR: 'hide_error',
  SHOW_EXAMPLE_MODAL: 'show_example_modal',
};

// Action generators
export const reqProgressAction = () => ({ type: CREATE_COUNTER_ACTIONS.REQ_PROGRESS });
export const reqFailedAction = () => ({ type: CREATE_COUNTER_ACTIONS.REQ_FAILED });
export const reqSuccessAction = () => ({ type: CREATE_COUNTER_ACTIONS.REQ_SUCCESS });
export const hideErrorAction = () => ({ type: CREATE_COUNTER_ACTIONS.HIDE_ERROR });
export const showExampleModalAction = () => ({ type: CREATE_COUNTER_ACTIONS.SHOW_EXAMPLE_MODAL });

export default CREATE_COUNTER_ACTIONS;
