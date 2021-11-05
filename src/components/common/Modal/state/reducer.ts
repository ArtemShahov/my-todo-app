import { ModalName } from "./modalTypes";
import { action_interface } from "./actionCreators";
import { OPEN_MODAL, CLOSE_MODAL } from "./actionTypes";

export interface modalReducer_interface {
  ADD_CATEGORY: boolean;
}

const initialState: modalReducer_interface = {
  ADD_CATEGORY: false,
};

export const modalReducer = (
  state = initialState,
  action: action_interface
) => {
  switch (action.type) {
    case OPEN_MODAL: {
      const modalName: ModalName = action.payload;
      return {
        ...state,
        [modalName]: true,
      };
    }
    case CLOSE_MODAL: {
      const modalName: ModalName = action.payload;
      return {
        ...state,
        [modalName]: false,
      };
    }
    default:
      return state;
  }
};
