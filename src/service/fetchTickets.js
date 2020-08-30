import flattenDeep from 'lodash/flattenDeep';

export const fetchSearchId = async () => {
  const response = await fetch('https://front-test.beta.aviasales.ru/search');
  const result = await response.json();

  return result;
};

export const fetchTickets = async (searchId) => {
  const getData = async (data = []) => {
    try {
      const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
      const resResults = await response.json();
      data.push(resResults.tickets);
      if (!resResults.stop) getData(data);
      return [data];
    } catch (err) {
      getData(data);
    }
  };
  const data = await getData();
  return await data;
};
