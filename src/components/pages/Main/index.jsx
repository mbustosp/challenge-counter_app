/**
 * Core dependencies
 */
import React, { useReducer, useEffect } from 'react';
import LoadingError from '../../molecules/LoadingError';
import mainReducer, { initialState, SCREENS } from './reducer';
import { filterByTitle, getSelected } from '../../../utils/counterUtils';
import { fetchCounters } from '../../../services/counterService';
import {
  failedLoadAction,
  loadCountersAction,
  refreshCountersAction,
  selectCounterAction,
  setCountAction,
  setSearchAction,
  setSearchActiveAction,
  successfulLoadAction,
} from './actions';

/**
 * Components
 */
import CounterList from '../../organisms/CounterList';
import NoCounters from '../../molecules/NoCounters';
import MainTemplate from '../../templates/MainTemplate';
import SearchBar from '../../molecules/SearchBar';
import ActionMenu from '../../organisms/ActionMenu';
import ActivityIndicator from '../../atoms/ActivityIndicator';
import NoResults from '../../molecules/NoResults';

/**
 * Main Screen
 */
const Main = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const { counters, screen, isRefreshing, search, isSearchActive } = state;
  const filteredCounters = search ? filterByTitle(counters, search) : counters;
  const selectedCounters = getSelected(filteredCounters);
  let content = null;

  // Only fetch changes on initial rendering or when refresh action is called
  useEffect(() => {
    if (isRefreshing || !counters.length) {
      if (isRefreshing) {
        dispatch(refreshCountersAction());
      } else {
        dispatch(loadCountersAction());
      }
      fetchCounters(
        (fetchedCounters) => dispatch(successfulLoadAction(fetchedCounters)),
        () => dispatch(failedLoadAction()),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefreshing]);

  // Sets the appropriate content for the current main screen state.
  switch (screen) {
    case SCREENS.HAS_CONTENT:
      content = filteredCounters.length ? (
        <CounterList
          selectedCount={selectedCounters.length}
          counters={filteredCounters}
          isRefreshing={isRefreshing}
          onSelect={(id) => dispatch(selectCounterAction(id))}
          onRefresh={() => dispatch(refreshCountersAction())}
          onIncrease={(counter) => dispatch(setCountAction(counter))}
          onDecrease={(counter) => dispatch(setCountAction(counter))}
        />
      ) : (
        <NoResults />
      );
      break;
    case SCREENS.NO_CONTENT:
      /**
       * There is a semantic difference between NoCounters and NoResults, the former is suitable for
       * empty search results whereas the latter is meant to be shown when no counters are available
       * from the backend.
       */
      content = <NoCounters />;
      break;
    case SCREENS.ERROR:
      content = <LoadingError retry={() => dispatch(refreshCountersAction())} />;
      break;
    case SCREENS.LOADING:
      content = <ActivityIndicator />;
      break;
    default:
      // Not accessible from user's interaction. Provided only in case of manual intervention.
      content = <LoadingError retry={() => dispatch(refreshCountersAction())} />;
      break;
  }

  const searchBar = (
    <SearchBar
      value={search}
      isActive={isSearchActive}
      onChange={(text) => dispatch(setSearchAction(text))}
      onCancel={() => dispatch(setSearchAction(''))}
      onFocus={() => dispatch(setSearchActiveAction(true))}
      onBlur={() => dispatch(setSearchActiveAction(false))}
    />
  );

  const actionMenu = (
    <ActionMenu
      selectedCounters={selectedCounters}
      onChange={() => dispatch(refreshCountersAction())}
    />
  );

  return (
    <MainTemplate
      header={searchBar}
      blurContent={isSearchActive && search === ''}
      blurFooter={isSearchActive && search === ''}
      content={content}
      footer={actionMenu}
    />
  );
};

export default Main;
