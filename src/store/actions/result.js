import * as actionsTypes from './actionTypes';

export const saveResult = (res) => {
  // const updatedResult = res*2;
  return {
    type: actionsTypes.STORE_RESULT,
    result: res
  };
}

export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter)
      dispatch(saveResult(res))
    }, 2000);
  }
};

export const deleteResult = (id) => {
  return {
    type: actionsTypes.DELETE_RESULT,
    resultElId: id
  };
};