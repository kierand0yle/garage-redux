// TODO: add and export your own actions

const ROOT_URL = 'https://wagon-garage-api.herokuapp.com';

export const FETCH_CARS = 'FETCH_CARS';
export const FETCH_CAR = 'FETCH_CAR';

export function fetchCars(garage) {
  const promise = fetch(`${ROOT_URL}/${garage}/cars`)
    .then(response => response.json());
  return {
    type: FETCH_CARS,
    payload: promise
  };
}

export function fetchCar(id) {
  const promise = fetch(`${ROOT_URL}/cars/${id}`)
    .then(response => response.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
}
