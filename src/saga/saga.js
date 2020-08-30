import { takeLatest, put, select, call } from 'redux-saga/effects';
import { fetchSearchId, fetchTickets } from '../service/fetchTickets';

function* fetchSearch() {
  yield put({ type: 'FETCH_SEARCH_ASYNC', value: yield call(fetchSearchId) });
}

function* fetchTicketsSaga() {
  yield put({
    type: 'FETCH_TICKETS_ASYNC',
    value: yield call(fetchTickets, yield select((state) => state.searchId)),
  });
}

function* watchFetchTickets() {
  yield takeLatest('FETCH_TICKETS', fetchTicketsSaga);
}
function* watchFetchSearch() {
  yield takeLatest('FETCH_SEARCH', fetchSearch);
}

export { watchFetchSearch, watchFetchTickets };
