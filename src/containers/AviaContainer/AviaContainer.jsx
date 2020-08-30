import React from 'react';
import { Avia } from '../../components';
import { fetchSearchId, fetchTickets } from '../../service/fetchTickets.js';

import { useSelector, useDispatch } from 'react-redux';
import './Avia.scss';

export default function AviaContainer() {
  const search = useSelector((state) => state.searchId);
  const fetched = useSelector((state) => state.fetched);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  if (!search && !loading) {
    dispatch({ type: 'LOADING' });
    dispatch({ type: 'FETCH_SEARCH' });
  }
  if (search && !fetched.length && loading) dispatch({ type: 'FETCH_TICKETS' });
  return <Avia />;
}
