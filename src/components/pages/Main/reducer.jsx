/* eslint-disable no-param-reassign */
import produce from 'immer';
import COUNTER_ACTIONS from './actions';

export const SCREENS = {
  LOADING: 'LOADING',
  HAS_CONTENT: 'HAS_CONTENT',
  NO_CONTENT: 'NO_CONTENT',
  ERROR: 'ERROR',
};

/**
 * Main Page initial state.
 * - Screen: type of content that will be displayed according to the page ongoing actions.
 * - Counters: collection of counter elements.
 * - Search: text value typed in the search input that will be used to filter the counters collection.
 * - isSearchActive: true if focus is set on the search's input.
 * - isRefreshing: true if counters are being fetched.
 */
export const initialState = {
  screen: SCREENS.LOADING,
  counters: [],
  search: '',
  isSearchActive: false,
  isRefreshing: false,
};

/**
 * Main Screen action handler.
 * @param state Main Screen State
 * @param action one of the Main Screen compatible actions
 * @returns Updated new state
 */
const reducer = produce((draft, action) => {
  let index = -1;
  switch (action.type) {
    case COUNTER_ACTIONS.SET_COUNT:
      index = draft.counters.findIndex((counter) => counter.id === action.id);
      if (index !== -1) draft.counters[index].count = action.count;
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
    case COUNTER_ACTIONS.SEARCH_ACTIVE:
      draft.isSearchActive = action.shouldBeActive;
      break;
    case COUNTER_ACTIONS.LOAD:
      draft.isLoading = true;
      draft.screen = SCREENS.LOADING;
      break;
    case COUNTER_ACTIONS.FAILED_LOAD:
      draft.isLoading = false;
      draft.isRefreshing = false;
      draft.counters = [];
      draft.screen = SCREENS.ERROR;
      break;
    case COUNTER_ACTIONS.SUCCESSFUL_LOAD:
      draft.screen = action.counters.length ? SCREENS.HAS_CONTENT : SCREENS.NO_CONTENT;
      draft.counters = action.counters;
      draft.isLoading = false;
      draft.isRefreshing = false;
      break;
    case COUNTER_ACTIONS.REFRESH:
      if (draft.screen === SCREENS.ERROR) {
        draft.screen = SCREENS.LOADING;
      }
      draft.isRefreshing = true;
      draft.isError = false;
      break;
    default:
      throw new Error('Not supported');
  }
});

export default reducer;
