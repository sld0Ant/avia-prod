import { useDispatch } from 'react-redux';

const LOADING = 'LOADING';
const FETCH_TICKETS_ASYNC = 'FETCH_TICKETS_ASYNC';
const ALL_TRANSFERS = 'ALL_TRANSFERS';
const NO_TRANSFERS = 'NO_TRANSFERS';
const ONE_TRANSFER = 'ONE_TRANSFER';
const TWO_TRANSFERS = 'TWO_TRANSFERS';
const THREE_TRANSFERS = 'THREE_TRANSFERS';
const ONLY_CHEAP = 'ONLY_CHEAP';
const ONLY_FAST = 'ONLY_FAST';

const actionMaker = (type, value = null) => (dispatch) => dispatch({ type });

const loading = actionMaker(LOADING);
const allFilter = actionMaker(ALL_TRANSFERS);
const noFilter = actionMaker(NO_TRANSFERS);
const oneFilter = actionMaker(ONE_TRANSFER);
const twoFilter = actionMaker(TWO_TRANSFERS);
const threeFilter = actionMaker(THREE_TRANSFERS);
const speedFilter = actionMaker(ONLY_FAST);
const costFilter = actionMaker(ONLY_CHEAP);
const initFetch = actionMaker(ONLY_CHEAP);

export {
  loading,
  allFilter,
  noFilter,
  oneFilter,
  twoFilter,
  threeFilter,
  speedFilter,
  costFilter,
  initFetch,
};

export {
  LOADING,
  FETCH_TICKETS_ASYNC,
  ALL_TRANSFERS,
  ONE_TRANSFER,
  TWO_TRANSFERS,
  THREE_TRANSFERS,
  ONLY_CHEAP,
  ONLY_FAST,
  NO_TRANSFERS,
};
