import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

// FIXME:  GET ALL FIGHTERS
const getFighters = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/fighters.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// FIXME: CREATE FIGHTER
const createFighter = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/fighters.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleFighter = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/fighters/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// FIXME: DELETE fighter
const deleteSingleFighter = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/fighters/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: UPDATE fighter
const updateFighter = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/fighters/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getFavoriteFighters = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/fighters.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const favorites = Object.values(data).filter((item) => item.favorite);
      resolve(favorites);
    })
    .catch(reject);
});

export {
  getFighters,
  createFighter,
  getSingleFighter,
  deleteSingleFighter,
  updateFighter,
  getFavoriteFighters,
};
