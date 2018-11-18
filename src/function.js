import axios from 'axios';

// default setting from axios request
export const defaultFetch = axios.create({
  method: 'GET',
  baseURL: 'https://min-api.cryptocompare.com',
});

// handle lenght list
export const getCryptocurrencyList = (
  list,
  setLengthList = 20,
) => {
  let newList;
  if (list.length >= setLengthList) {
    newList = list.splice(0, setLengthList);
    return newList;
  }
  return list;
};
