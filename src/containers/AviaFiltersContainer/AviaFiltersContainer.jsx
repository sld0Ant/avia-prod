import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AviaFilters.scss';
import { AviaCheckFilters, AviaMostFilters } from '../../components';

export default function AviaFiltersContainer({ type }) {
  let invertFilter = (dispatch) => (type) => dispatch({ type, value: '' });
  invertFilter = invertFilter(useDispatch());
  const transfers = useSelector((state) => state.filter.transfers);
  const most = useSelector((state) => state.filter.most);
  if (type === 'checkbox-filter') return <AviaCheckFilters transfers={transfers} invertFilter={invertFilter} />;
  else if (type === 'most-filter') return <AviaMostFilters most={most} invertFilter={invertFilter} />;
}
