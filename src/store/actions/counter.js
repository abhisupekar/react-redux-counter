import * as actionsTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionsTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionsTypes.DECREMENT
  };
};

export const add = (num) => {
  return {
    type: actionsTypes.ADD,
    value: num
  };
};

export const substract = (num) => {
  return {
    type: actionsTypes.SUBSTRACT,
    value: num
  };
};
