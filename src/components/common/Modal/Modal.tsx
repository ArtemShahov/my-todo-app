import React from "react";
import selectors from "./state/selectors";
import { connect } from "react-redux";
import { ModalName } from "./state/modalTypes";
import './styles.scss';
import actions from "./state/actions";

interface Props {
  children: any,
  type: ModalName,
  isOpens?: any,
  closeModal?: any, 
}

function Modal(props: Props) {
  const { children, type, isOpens, closeModal} = props;
  const isModalOpen = isOpens[type];
  return (
  <div className={`modal ${!isModalOpen ? 'visually-hidden' : ''}`}>
      <div className="modal__overflow" onClick={() => closeModal(type)} />
      <div className="modal__content">
      {children}
      </div>
      </div>
  );
}

const mapStateToProps = (state: any) => ({
  isOpens: selectors.isModalOpen(state),
});

export default connect(mapStateToProps, { ...actions})(Modal);
