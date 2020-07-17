/* eslint-disable no-param-reassign */
import produce from 'immer';
import CREATE_COUNTER_ACTIONS from './actions';

/**
 * Create Counter Modal initial state.
 */
export const initialState = {
  reqProgress: false,
  reqFailed: false,
  reqSuccess: false,
  showExampleModal: false,
};

/**
 * Create Counter Modal action handler.
 * @param state Create Counter Modal State
 * @param action one of the Create Counter Modal compatible actions
 * @returns Updated new state
 */
const reducer = produce((draft, action) => {
  draft.reqFailed = false;
  draft.reqProgress = false;
  draft.reqSuccess = false;

  switch (action.type) {
    case CREATE_COUNTER_ACTIONS.REQ_PROGRESS:
      draft.reqProgress = true;
      break;
    case CREATE_COUNTER_ACTIONS.REQ_FAILED:
      draft.reqFailed = true;
      break;
    case CREATE_COUNTER_ACTIONS.REQ_SUCCESS:
      draft.reqSuccess = true;
      break;
    case CREATE_COUNTER_ACTIONS.HIDE_ERROR:
      break;
    case CREATE_COUNTER_ACTIONS.SHOW_EXAMPLE_MODAL:
      draft.showExampleModal = !draft.showExampleModal;
      break;
    default:
      throw new Error('Not supported');
  }
});

export default reducer;
