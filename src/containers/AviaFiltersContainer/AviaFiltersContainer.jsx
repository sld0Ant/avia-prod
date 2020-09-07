import React from 'react';
import { Checkbox } from 'antd';

import {
  noFilter,
  oneFilter,
  twoFilter,
  threeFilter,
  allFilter,
  costFilter,
  speedFilter,
} from '../../redux/actions';
import { AviaCheckFilters, AviaMostFilters } from '../../components';
import './AviaFilters.scss';

const CheckBoxies = (
  filters = [noFilter, oneFilter, twoFilter, threeFilter, allFilter],
  labels = [
    'Без пересадок',
    'С одной пересадкой',
    'С двумя пересадками',
    'С тремя пересадками',
    'Все',
  ]
) => (values, dispatch) =>
  filters.map((fl, i) => (
    <Checkbox
      key={labels[i]}
      checked={values[i]}
      onChange={() => fl(dispatch)}
      className="avia__checkbox"
    >
      <span>{labels[i]}</span>
    </Checkbox>
  ));

const sortByButtons = (
  filters = [costFilter, speedFilter],
  labels = ['САМЫЙ ДЕШЕВЫЙ', 'САМЫЙ БЫСТРЫЙ']
) => (value, dispatch) =>
  filters.map((fl, i) => (
    <input
      key={labels[i]}
      value={labels[i]}
      type="button"
      style={
        i === 0
          ? (value === 'price' && { background: '#2196f3', color: 'white' }) ||
            {}
          : (value === 'duration' && {
              background: '#2196f3',
              color: 'white',
            }) ||
            {}
      }
      onClick={() => fl(dispatch)}
      className="avia__button"
    />
  ));
export default function AviaFiltersContainer({ type }) {
  return type === 'checkbox-filter' ? (
    <AviaCheckFilters checkBoxies={CheckBoxies()} />
  ) : (
    <AviaMostFilters sortByButtons={sortByButtons()} />
  );
}
