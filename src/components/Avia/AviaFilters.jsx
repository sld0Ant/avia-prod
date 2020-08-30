import React from 'react';

import { Checkbox } from 'antd';
function AviaCheckFilters({ invertFilter, transfers }) {
  return (
    <section className="avia__filters--check">
      <span className="avia__check-title">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <Checkbox checked={transfers.all} onChange={() => invertFilter('ALL_TRANSFERS')} className="avia__checkbox">
        Все
      </Checkbox>
      <Checkbox checked={transfers.none} onChange={() => invertFilter('NO_TRANSFERS')} className="avia__checkbox">
        Без пересадок
      </Checkbox>
      <Checkbox checked={transfers.one} onChange={() => invertFilter('ONE_TRANSFER')} className="avia__checkbox">
        1 пересадка
      </Checkbox>
      <Checkbox checked={transfers.two} onChange={() => invertFilter('TWO_TRANSFERS')} className="avia__checkbox">
        2 пересадки
      </Checkbox>
      <Checkbox checked={transfers.three} onChange={() => invertFilter('THREE_TRANSFERS')} className="avia__checkbox">
        3 пересадки
      </Checkbox>
    </section>
  );
}

function AviaMostFilters({ most, invertFilter }) {
  return (
    <section className="avia__filters--most">
      <input
        value="САМЫЙ ДЕШЕВЫЙ"
        type="button"
        style={(most.cheap && { background: '#2196f3', color: 'white' }) || {}}
        onClick={(e) => invertFilter('ONLY_CHEAP')}
        className="avia__button"
        autoFocus
      />
      <input
        value="САМЫЙ БЫСТРЫЙ"
        type="button"
        style={(most.fast && { background: '#2196f3', color: 'white' }) || {}}
        onClick={(e) => invertFilter('ONLY_FAST')}
        className="avia__button"
      />
    </section>
  );
}

export { AviaCheckFilters, AviaMostFilters };
