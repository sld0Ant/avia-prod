import React from 'react';
import { useSelector } from 'react-redux';
import { AviaCard } from '.';

export default function AviaTickets() {
  const state = useSelector((state) => state);
  return (
    <ul className="avia__tickets">
      {!state.loading &&
        state.preparedData.length > 0 &&
        [...state.preparedData.slice(0, 5)].map((ticket) => (
          <li key={ticket.id}>
            <AviaCard {...ticket} />
          </li>
        ))}
    </ul>
  );
}
