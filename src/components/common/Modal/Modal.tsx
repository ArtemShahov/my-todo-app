import React from "react";
import selectors from "./state/selectors";
import { connect, ConnectedProps } from "react-redux";
import { ModalName } from "./state/modalTypes";
import classes from "./styles.module.scss";
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
    <div className={classes.modal}>
      <div className={classes.modalOverflow} onClick={() => closeModal(type)} />
      <div className={classes.modalContent}>{newChildren}</div>
    </div>
  ): (<></>);

}

export default connector(Modal);
