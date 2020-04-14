export const GET_DATA_REQUEST = 'GET_USER_REQUEST';
export const GET_DATA_SUCCESS = 'GET_USER_SUCCESS';
export const GET_DATA_FAIL = 'GET_USER_FAIL';
import { ADD } from '../actions/actions';
//Action: "add"
export const addAction = (text, data) => {
  return {
      type: ADD,
      text:text,
      data:data
  }
}

export const getDataRequest = () => {
  return {type: GET_DATA_REQUEST};
};
export const getDataSuccess = data => {
  return {type: GET_DATA_SUCCESS, payload: {data}};
};
export const getDataFail = err => {
  return {type: GET_DATA_FAIL, payload: {err}};
};