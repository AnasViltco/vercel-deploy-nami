import {
  GET_DROPDOWN_ADVISER_DROPDOWN_VALUE,
  GET_DROPDOWN_ADVISER_DROPDOWN_VALUE_SUCCESS,
  GET_ADVISER_PROFILE_INFO,
  GET_ADVISER_PROFILE_INFO_SUCCESS,
  ADD_ADVISER_CALL,
  GET_ADVISER_LIST,
  GET_ADVISER_LIST_SUCCESS,
  DELETE_ADVISER,
  ADVISER_STATUS,
} from "./actionTypes";

export const getAllDropdownValueAdviser = () => {
  return {
    type: GET_DROPDOWN_ADVISER_DROPDOWN_VALUE,
  };
};

export const getDropdownAdviserSuccess = (data) => {
  return {
    type: GET_DROPDOWN_ADVISER_DROPDOWN_VALUE_SUCCESS,
    payload: data,
  };
};

export const addAdviserCall = (data) => {
  return {
    type: ADD_ADVISER_CALL,
    payload: data,
  };
};

export const getAdviserProfileInfo = (data) => {
  return {
    type: GET_ADVISER_PROFILE_INFO,
    payload: data,
  };
};

export const getAdviserProfileInfoSuccess = (data) => {
  return {
    type: GET_ADVISER_PROFILE_INFO_SUCCESS,
    payload: data,
  };
};

export const getAdviserList = (data) => {
  return {
    type: GET_ADVISER_LIST,
    payload: data,
  };
};

export const getAdviserListSuccess = (data) => {
  return {
    type: GET_ADVISER_LIST_SUCCESS,
    payload: data,
  };
};

export const deleteAdviser = (data) => {
  return {
    type: DELETE_ADVISER,
    payload: data,
  };
};

export const adviserStatus = (data) => {
  return {
    type: ADVISER_STATUS,
    payload: data,
  };
};
