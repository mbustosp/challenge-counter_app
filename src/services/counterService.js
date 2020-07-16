/**
 * Counter Service.
 * Layer of communication with the Counter App API.
 */
import {
  failedLoadAction,
  refreshCountersAction,
  setCountAction,
  successfulLoadAction,
  loadCountersAction,
  deleteCountersAction,
} from '../components/pages/Main/actions';

export const fetchCounters = (dispatch) => (isRefreshing) => {
  dispatch(isRefreshing ? refreshCountersAction() : loadCountersAction());
  fetch('/api/v1/counter')
    .then((reqCounters) => reqCounters.json())
    .then((reqCounters) => dispatch(successfulLoadAction(reqCounters)))
    .catch(() => dispatch(failedLoadAction()));
};

export const increaseCounter = (dispatch) => (reqId) => {
  fetch('/api/v1/counter/inc', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: reqId }),
  })
    .then((reqCounter) => reqCounter.json())
    .then(({ id, count }) => dispatch(setCountAction(id, count)))
    .catch(() => console.log('Can not increase'));
};

export const decreaseCounter = (dispatch) => (reqId) => {
  fetch('/api/v1/counter/dec', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: reqId }),
  })
    .then((reqCounter) => reqCounter.json())
    .then(({ id, count }) => dispatch(setCountAction(id, count)))
    .catch(() => console.log('Can not decrease'));
};

export const deleteCounters = (dispatch) => (ids) => {
  const errors = [];
  const requests = ids.map((id) =>
    fetch('/api/v1/counter', {
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    }).catch(() => errors.push(id)),
  );

  Promise.all(requests).then(() =>
    dispatch(deleteCountersAction(ids.filter((id) => !errors.includes(id)))),
  );
};
