import React from 'react';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import { AviaFiltersContainer } from '../../containers';
import { AviaTickets } from '..';

function AviaBodyAside() {
  return (
    <section className="avia__aside">
      <AviaFiltersContainer type="checkbox-filter" />
    </section>
  );
}

function AviaBodyMain() {
  const preparedData = useSelector((state) => state.preparedData);
  return (
    <section className="avia__main">
      <AviaFiltersContainer type="most-filter" />
      {(!preparedData.length && <Spin size="large" />) || <AviaTickets />}
    </section>
  );
}
export default function AviaBody() {
  return (
    <div className="avia__body">
      <AviaBodyAside />
      <AviaBodyMain />
    </div>
  );
}
