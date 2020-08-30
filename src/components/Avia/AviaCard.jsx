import React from 'react';
import { Card } from 'antd';
export default function AviaCard() {
  return (
    <Card hoverable className="avia__card">
      <div className="avia__card-title">
        <h1>14 000 ₽</h1>
        <div />
      </div>
      <div className="avia__card-entry">
        <div className="avia__card-timeway">
          <span>MOW - HKT</span>
          <span>10:45 - 08:00</span>
        </div>
        <div className="avia__card-eta">
          <span>В ПУТИ</span>
          <span>21ч 15м</span>
        </div>
        <div className="avia__card-transfer">
          <span>2 ПЕРЕСАДКИ</span>
          <span>HKG, JNB</span>
        </div>
      </div>
    </Card>
  );
}
