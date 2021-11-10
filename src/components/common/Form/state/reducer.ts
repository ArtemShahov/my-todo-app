

import { action_interface } from "../../../../store/interfaces";
import {
  CHANGE_INPUT_VALUE,
} from "./actionTypes";

export interface FormReducer_interface {  
}

const initialState: FormReducer_interface = {
  title: '',
  categoryName: '',
  content:'',
};

export const FormReducer = (
  state = initialState,
  action: action_interface
) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE: {
      const { field, value } = action.payload;
      return {
        ...state,
        [field]: value,
      };
    }
    default:
      return state;
  }
};
