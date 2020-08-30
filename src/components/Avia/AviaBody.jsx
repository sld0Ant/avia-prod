import React from 'react';
import { AviaFiltersContainer } from '../../containers';
import { AviaTickets } from '../';
function AviaBodyAside() {
  return (
    <section className="avia__aside">
      <AviaFiltersContainer type="checkbox-filter" />
    </section>
  );
}

function AviaBodyMain() {
  return (
    <section className="avia__main">
      <AviaFiltersContainer type="most-filter" />
      <AviaTickets />
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
