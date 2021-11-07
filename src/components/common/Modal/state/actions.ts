/* eslint-disable import/no-anonymous-default-export */
import { ModalName } from './modalTypes';
import actionCreators from "./actionCreators";
import { AppDispatch } from '../../../../store/types';

const openModal = (modalName: ModalName) => (dispatch: AppDispatch) => {
  dispatch(actionCreators.openModal(modalName));
};

const closeModal = (modalName: ModalName) => (dispatch: AppDispatch) => {
    dispatch(actionCreators.closeModal(modalName));
};

export default {
  openModal,
  closeModal,
};
