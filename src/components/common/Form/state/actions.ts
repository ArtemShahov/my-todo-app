/* eslint-disable import/no-anonymous-default-export */
import { AppDispatch } from "../../../../store/types";
import actionCreators from "./actionCreators";


const changeInputValue =
  (field: string, value: string) => (dispatch: AppDispatch) => {
    dispatch(actionCreators.changeInputValue({ field, value }));
  };


export default {
  changeInputValue,
};
