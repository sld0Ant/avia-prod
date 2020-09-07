import { takeLatest, put, call } from 'redux-saga/effects';

import { separateByStops, formatData } from '../tools';

const formatResponseToJSON = (url, concreteProp) =>
  fetch(url)
    .then((response) => response.json())
    .then((data) => (concreteProp ? data[concreteProp] : data));

const getTicketUrl = async (URL = 'https://front-test.beta.aviasales.ru/') =>
  `${URL}tickets?searchId=` +
  (await formatResponseToJSON(`${URL}search`, 'searchId'));

function* fTick(mass, url) {
  try {
    const res = yield call(fetch, url);
    if (res.status === 500 && res.status === 404) throw res.status;
    const data = yield res.json();
    mass.data = {
      tickets: [...mass.data.tickets, ...data.tickets],
      stop: data.stop,
    };
  } catch (e) {}
}

function* fetchTicketsSaga() {
  const tUrl = yield call(getTicketUrl);
  const mass = { data: { tickets: [] }, url: tUrl };
  yield fTick(mass, mass.url);
  while (!mass.data.stop) yield fTick(mass, mass.url);
  yield put({
    type: 'FETCH_TICKETS_ASYNC',
    value: separateByStops(formatData(mass.data.tickets)),
  });
}

function* watchFetchTickets() {
  yield takeLatest('FETCH_TICKETS', fetchTicketsSaga);
}

export { watchFetchTickets };
