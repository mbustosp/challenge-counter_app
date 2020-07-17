/**
 * Counter Service.
 * Layer of communication with the Counter App API.
 */

export const fetchCounters = (onSuccess, onFailure) => {
  fetch('/api/v1/counter')
    .then((reqCounters) => reqCounters.json())
    .then((counters) => onSuccess(counters))
    .catch(() => onFailure());
};

export const increaseCounter = (onSuccess, onFailure) => (reqId) => {
  fetch('/api/v1/counter/inc', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: reqId }),
  })
    .then((reqCounter) => reqCounter.json())
    .then((counter) => onSuccess(counter))
    .catch(() => onFailure());
};

export const decreaseCounter = (onSuccess, onFailure) => (reqId) => {
  fetch('/api/v1/counter/dec', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: reqId }),
  })
    .then((reqCounter) => reqCounter.json())
    .then((counter) => onSuccess(counter))
    .catch(() => onFailure());
};

export const deleteCounters = (onSuccess, onFailure) => (ids) => {
  const errors = [];
  const requests = ids.map(({ id }) =>
    fetch('/api/v1/counter', {
      method: 'DELETE', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    }).catch(() => errors.push(id)),
  );
  Promise.all(requests).then(() => (errors.length ? onFailure() : onSuccess()));
};
