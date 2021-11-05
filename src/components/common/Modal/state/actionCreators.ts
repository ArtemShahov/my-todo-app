import { ModalName } from './modalTypes';
/* eslint-disable import/no-anonymous-default-export */
import { OPEN_MODAL, CLOSE_MODAL } from "./actionTypes";

export interface action_interface {
  type: string,
  payload: string,
}

const openModal = (modalName: ModalName): action_interface => ({
  type: OPEN_MODAL,
  payload: modalName,
});

const closeModal = (modalName: ModalName): action_interface => ({
  type: CLOSE_MODAL,
  payload: modalName,
});

export default {
  openModal,
  closeModal,
};
