import React from 'react';
import { Avia } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import './Avia.scss';

export default function AviaContainer() {
  const state = useSelector(state => state);
  const fetched = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  if (loading && !fetched.length) {
    dispatch({ type: 'FETCH_TICKETS' });
    dispatch({ type: 'LOADING'})
  }


  return <Avia />;
}
