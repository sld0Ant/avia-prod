import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AviaCheckFilters({ checkBoxies }) {
  const transferChecks = checkBoxies(
    useSelector((state) => state.filters),
    useDispatch()
  );
  return (
    <section className="avia__filters--check">
      <span className="avia__check-title">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      {transferChecks}
    </section>
  );
}

function AviaMostFilters({ sortByButtons }) {
  const sortByComponents = sortByButtons(
    useSelector((state) => state.sortBy),
    useDispatch()
  );
  return <section className="avia__filters--most">{sortByComponents}</section>;
}

export { AviaCheckFilters, AviaMostFilters };
