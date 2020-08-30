import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AviaHeader, AviaBody } from './';
export default function Avia() {
  console.log(useSelector((state) => state));
  return (
    <main className="avia">
      <AviaHeader />
      <AviaBody />
    </main>
  );
}
