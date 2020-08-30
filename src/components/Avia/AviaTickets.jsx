import React from 'react';
import { AviaCard } from './';
export default function AviaTickets() {
  return (
    <ul className="avia__tickets">
      <li>
        <AviaCard></AviaCard>
        <AviaCard></AviaCard>
        <AviaCard></AviaCard>
        <AviaCard></AviaCard>
        <AviaCard></AviaCard>
      </li>
    </ul>
  );
}
