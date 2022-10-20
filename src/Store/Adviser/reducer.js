import produce from "immer";
import {
  GET_DROPDOWN_ADVISER_DROPDOWN_VALUE_SUCCESS,
  GET_ADVISER_PROFILE_INFO_SUCCESS,
  GET_ADVISER_LIST_SUCCESS,
} from "./actionTypes";

const initialState = {
  adviserDropdown: null,
  adviserList: [],
  adviserProfile: null,
};

const Adviser = produce((state, action) => {
  switch (action.type) {
    case GET_DROPDOWN_ADVISER_DROPDOWN_VALUE_SUCCESS:
      state.adviserDropdown = action.payload;
      break;
    case GET_ADVISER_LIST_SUCCESS:
      state.adviserList = action.payload;
      break;
    case GET_ADVISER_PROFILE_INFO_SUCCESS:
      state.adviserProfile = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default Adviser;
