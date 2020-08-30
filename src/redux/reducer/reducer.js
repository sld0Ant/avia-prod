import act from '../actions';
import { useDispatch } from 'react-redux';
import flattenDeep from 'lodash/flattenDeep';
const initialState = {
  searchId: '',
  fetched: [],
  filter: {
    transfers: { all: true, none: true, one: true, two: true, three: true },
    most: { cheap: true, fast: false },
  },
  loading: false,
};

const invert = (state, key) => !state.filter.transfers[key];

export default function rootReducer(originalState = initialState, action) {
  const state = { ...originalState };

  switch (action.type) {
    case 'LOADING': {
      state.loading = true;
      break;
    }
    case 'FETCH_TICKETS_ASYNC': {
      state.fetched = action.value;
      state.loading = false;
      break;
    }
    case 'FETCH_SEARCH_ASYNC': {
      console.log(action.value);
      state.searchId = action.value.searchId;
      break;
    }
    case 'ALL_TRANSFERS': {
      if (!state.filter.transfers.all)
        Object.keys(state.filter.transfers).forEach((key) => (state.filter.transfers[key] = true));

      break;
    }
    case 'NO_TRANSFERS': {
      state.filter.transfers['none'] = !state.filter.transfers['none'];
      break;
    }
    case 'ONE_TRANSFER': {
      state.filter.transfers['one'] = !state.filter.transfers['one'];
      break;
    }
    case 'TWO_TRANSFERS': {
      state.filter.transfers['two'] = !state.filter.transfers['two'];
      break;
    }
    case 'THREE_TRANSFERS': {
      state.filter.transfers['three'] = !state.filter.transfers['three'];
      break;
    }
    case 'ONLY_CHEAP': {
      state.filter.most.cheap = true;
      state.filter.most.fast = false;
      break;
    }
    case 'ONLY_FAST': {
      state.filter.most.cheap = false;
      state.filter.most.fast = true;
      break;
    }
  }

  if (
    state.filter.transfers.none &&
    state.filter.transfers.one &&
    state.filter.transfers.two &&
    state.filter.transfers.three
  )
    state.filter.transfers.all = true;
  else {
    state.filter.transfers.all = false;
  }
  return state;
}
