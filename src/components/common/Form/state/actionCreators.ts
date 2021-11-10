/* eslint-disable import/no-anonymous-default-export */

import { action_interface } from "../../../../store/interfaces";
import {
  CHANGE_INPUT_VALUE,
} from "./actionTypes";


const changeInputValue = (data: {
  field: string;
  value: string;
}): action_interface => ({
  type: CHANGE_INPUT_VALUE,
  payload: data,
});


export default {
  changeInputValue,
};
