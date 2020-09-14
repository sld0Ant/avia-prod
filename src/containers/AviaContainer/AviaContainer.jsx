import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-cycle
import { Avia } from '../../components';

import './Avia.scss';

export default function AviaContainer() {
  const fetched = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  if (loading && !fetched.length) {
    dispatch({ type: 'FETCH_TICKETS' });
    dispatch({ type: 'LOADING' });
  }

  return <Avia />;
}
