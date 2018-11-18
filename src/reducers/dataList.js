import { ADD_ITEMS } from '../actions';

const initialState = [];

export default function dataReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case ADD_ITEMS: {
      return applyAddItems(state, action);
    }
    default:
      return state;
  }
}

const applyAddItems = (state, action) => {
  return [...state, ...action.payload];
};
