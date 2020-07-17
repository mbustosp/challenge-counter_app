/* eslint-disable no-param-reassign */
import produce from 'immer';
import COUNTER_LIST_ACTIONS from './actions';

/**
 * Counter List initial state.
 */
export const initialState = {
  reqProgress: false,
  reqFailed: false,
  reqSuccess: false,

  retry: () => true,
  errorMessage: '',
};

/**
 * Counter List action handler.
 * @param state Counter List State
 * @param action one of the Counter List compatible actions
 * @returns Updated new state
 */
const reducer = produce((draft, action) => {
  draft.errorMessage = '';
  draft.retry = () => true;
  switch (action.type) {
    case COUNTER_LIST_ACTIONS.REQ_PROGRESS:
      draft.reqProgress = true;
      draft.reqFailed = false;
      draft.reqSuccess = false;
      break;
    case COUNTER_LIST_ACTIONS.REQ_FAILED:
      draft.reqProgress = false;
      draft.reqFailed = true;
      draft.reqSuccess = false;
      draft.errorMessage = action.errorMessage;
      draft.retry = action.retry;
      break;
    case COUNTER_LIST_ACTIONS.REQ_SUCCESS:
      draft.reqProgress = false;
      draft.reqFailed = false;
      draft.reqSuccess = true;
      break;
    case COUNTER_LIST_ACTIONS.HIDE_ERROR:
      draft.reqProgress = false;
      draft.reqFailed = false;
      draft.reqSuccess = false;
      break;
    default:
      throw new Error('Not supported');
  }
});

export default reducer;
