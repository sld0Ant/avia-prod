/* eslint-disable */
const getDuration = (item) => [
  item.segments[0].duration / 60,
  item.segments[1].duration / 60,
];

const getStops = (item) => {
  const [to, from] = [item.segments[0].stops, item.segments[1].stops];
  return [Math.max(to.length, from.length), to, from];
};

const formatMapper = (item, i) => {
  const { origin, destination } = { ...item.segments[0] };
  const [price, duration, stops, date, carrier] = [
    item.price,
    getDuration(item),
    getStops(item),
    [
      item.segments[0].date.split('').slice(11, 16),
      item.segments[1].date.split('').slice(11, 16),
    ],
    `https://pics.avs.io/99/36/${item.carrier}.png`,
  ];
  return {
    id: i + 1,
    price,
    duration,
    stops,
    origin,
    destination,
    date,
    carrier,
  };
};

export const formatData = (data) => data.map(formatMapper);

const predefineEmptyArr = () => Array(5).fill(null);

const stopsMapper = (data) => (el, i) =>
  i === 4 ? data : data.filter((item) => item.stops[0] === i);

export const separateByStops = (data) =>
  predefineEmptyArr().map(stopsMapper(data));

const reduceWithFilter = (filters) => [
  (result, tickets, i) => (filters[i] ? [...result, ...tickets] : [...result]),
  [],
];

export const filterByStops = (data, filters) =>
  filters[4] ? data[4] : data.reduce(...reduceWithFilter(filters));

const compareByProperty = (prop) => (a, b) =>
  a[prop] === b[prop] ? 0 : a[prop] - b[prop];

export const sortBy = (data, prop) => {
  return [...data].sort(compareByProperty(prop));
};

const offButOnAll = (draft, filters) => (n) => {
  if (n === 4 && !filters[n])
    return { ...draft, filters: draft.filters.map(() => true) };
  else if (n === 4) {
    filters[4] = false;
    return { ...draft, filters: [...filters] };
  }
};

const offSigleOnButAll = (draft, filters) => (n) => {
  if (!filters[n] && filters.filter((el) => el === true).length > 2)
    return { ...draft, filters: draft.filters.map(() => true) };
  if (filters[n])
    return {
      ...draft,
      filters: draft.filters.map((f, i) => (i === 4 || i === n ? false : f)),
    };
};

const singleOnButSingle = (draft) => (n) => ({
  ...draft,
  filters: draft.filters.map((k, i) => (i === n ? true : k)),
});

const funcMapper = (draft, filters) =>
  [offButOnAll, offSigleOnButAll, singleOnButSingle].map((func) =>
    func(draft, filters)
  );

export const filterControl = (state, n) => {
  return funcMapper({ ...state }, [...state.filters])
    .map((func) => func(n))
    .filter((res) => res)[0];
};

export const applyFiltersToView = (settedState) => ({
  ...settedState,
  data: settedState.data,
  preparedData:
    settedState.data.length &&
    sortBy(
      filterByStops(settedState.data, settedState.filters),
      settedState.sortBy
    ),
});
