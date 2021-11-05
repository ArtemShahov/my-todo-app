/* eslint-disable import/no-anonymous-default-export */
import dataService from "../../../dataService/dataService";
import actionCreators from "./actionCreators";

const loadCategories = () => (dispatch: any) => {
  dataService.getCategories().then((data) => {
    dispatch(actionCreators.setCategories(data));
  });
};

export default {
  loadCategories,
};
