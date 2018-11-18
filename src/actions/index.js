import { getCryptocurrencyList } from '../function';

export const ADD_ITEMS = 'ADD_ITEMS';

export const doAddList = list => {
  const newList = getCryptocurrencyList(list);
  return {
    type: ADD_ITEMS,
    payload: newList,
  };
};
