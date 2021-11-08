import React from "react";
import selectors from "./state/selectors";
import { connect, ConnectedProps } from "react-redux";
import { ModalName } from "./state/modalTypes";
import "./styles.scss";
import actions from "./state/actions";
import { RootState } from "../../../store/types";

const mapStateToProps = (state: RootState) => ({
  isOpens: selectors.isModalOpen(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  children: any;
  type: ModalName;
}

function Modal(props: Props) {
  const { children, type, isOpens, closeModal } = props;
  const isModalOpen = isOpens[type];
  const close = () => closeModal(type);
  const newChildren = React.cloneElement(children, {close});
  return isModalOpen ? (
    <div className={`modal ${!isModalOpen ? "visually-hidden" : ""}`}>
      <div className="modal__overflow" onClick={() => closeModal(type)} />
      <div className="modal__content">{newChildren}</div>
    </div>
  ): (<></>);

}

export default connector(Modal);
