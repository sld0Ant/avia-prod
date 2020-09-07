import { filterControl, applyFiltersToView } from '../../tools';

const initialState = {
  data: [],
  preparedData: [],
  filters: [true, true, true, true, true],
  sortBy: 'price',
  loading: true,
};

export default function rootReducer(originalState = initialState, action) {
  const state = { ...originalState };

  switch (action.type) {
    case 'LOADING': {
      const draft = { ...state };
      return { ...draft, loading: !draft.loading };
    }

    case 'FETCH_TICKETS_ASYNC': {
      return applyFiltersToView(
        filterControl(
          {
            ...state,
            data: action.value,
          },
          4
        )
      );
    }

    case 'ALL_TRANSFERS': {
      return applyFiltersToView(filterControl(state, 4));
    }
    case 'NO_TRANSFERS': {
      return applyFiltersToView(filterControl(state, 0));
    }
    case 'ONE_TRANSFER': {
      return applyFiltersToView(filterControl(state, 1));
    }
    case 'TWO_TRANSFERS': {
      return applyFiltersToView(filterControl(state, 2));
    }
    case 'THREE_TRANSFERS': {
      return applyFiltersToView(filterControl(state, 3));
    }
    case 'ONLY_CHEAP': {
      return applyFiltersToView({ ...state, sortBy: 'price' });
    }
    case 'ONLY_FAST': {
      return applyFiltersToView({ ...state, sortBy: 'duration' });
    }
    default:
      break;
  }
  return { ...state };
}
