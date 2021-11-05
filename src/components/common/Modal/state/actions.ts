import { ModalName } from './modalTypes';
/* eslint-disable import/no-anonymous-default-export */
import actionCreators from "./actionCreators";

const openModal = (modalName: ModalName) => (dispatch: any) => {
  dispatch(actionCreators.openModal(modalName));
};

const closeModal = (modalName: ModalName) => (dispatch: any) => {
    dispatch(actionCreators.closeModal(modalName));
};

export default {
  openModal,
  closeModal,
};
