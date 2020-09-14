import React from 'react';
import { Card } from 'antd';

const formatTransfersText = (stops) =>
  stops.length === 1
    ? '1 ПЕРЕСАДКА'
    : !stops.length
    ? 'БЕЗ ПЕРЕСАДКИ'
    : `${stops.length} ПЕРЕСАДКИ`;

const transfers = (n) => (stops) => {
  if (stops[0] === 0) return <span>БЕЗ ПЕРЕСАДКИ</span>;

  return (
    <>
      <span>{formatTransfersText(stops[n])}</span>
      <span>{stops[n].join(', ')}</span>
    </>
  );
};

const transfersFrom = transfers(2);
const transfersTo = transfers(1);
const hours2datetime = (date, duration) => {
  const hours = (+date[0] + +duration[0] + +`0.${date[1] + duration[1]}`) / 24;
  const datetime = (+`0.${hours.toString().split('.')[1]}` * 24)
    .toString()
    .split('.');
  return [
    datetime[0] < 10 ? `0${datetime[0]}` : datetime[0],
    Math.floor(+`0.${datetime[1]}` * 60) < 10
      ? `0${Math.floor(+`0.${datetime[1]}` * 60)}`
      : Math.floor(+`0.${datetime[1]}` * 60),
  ];
};

export default function AviaCard({
  price,
  destination,
  origin,
  stops,
  duration,
  date,
  carrier,
}) {
  const [
    durationToSplitted,
    durationFromSplitted,
    dateToSplitted,
    dateFromSplitted,
  ] = [
    `${duration[0]}`.split('.'),
    `${duration[1]}`.split('.'),
    date[0].join('').split(':'),
    date[1].join('').split(':'),
  ];

  const [datetimeTo, datetimeFrom] = [
    hours2datetime(dateToSplitted, durationToSplitted),
    hours2datetime(dateFromSplitted, durationFromSplitted),
  ];
  console.log(datetimeTo, datetimeFrom);
  return (
    <Card hoverable className="avia__card">
      <div className="avia__card-title">
        <h1>{price} ₽</h1>
        <div style={{ background: `url(${carrier})` }} />
      </div>
      <div className="avia__card-entry">
        <div className="avia__card-timeway">
          <span>
            {origin} - {destination}
          </span>
          <span>
            {date[0]} - {datetimeTo.join(':')}
          </span>
        </div>
        <div className="avia__card-eta">
          <span>В ПУТИ</span>
          <span>{`${durationToSplitted[0]}ч. ${Math.floor(
            60 * ('0.' + durationToSplitted[1])
          )}мин.`}</span>
        </div>
        <div className="avia__card-transfer">{transfersTo(stops)}</div>
      </div>
      <div className="avia__card-entry">
        <div className="avia__card-timeway">
          <span>
            {destination} - {origin}
          </span>
          <span>
            {date[1]} - {datetimeFrom.join(':')}
          </span>
        </div>
        <div className="avia__card-eta">
          <span>В ПУТИ</span>
          <span>{`${durationFromSplitted[0]}ч. ${Math.floor(
            60 * ('0.' + durationFromSplitted[1])
          )}мин.`}</span>
        </div>
        <div className="avia__card-transfer">{transfersFrom(stops)}</div>
      </div>
    </Card>
  );
}
