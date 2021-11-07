import React from "react";
import { connect } from "react-redux";
import Button from "../common/Button";
import actions from "../common/Modal/state/actions";
import { ADD_CATEGORY, DELETE_CATEGORY, ModalName } from "../common/Modal/state/modalTypes";

interface Props {
    openModal: (modalName: ModalName) => void
}

function CategoryControl (props: Props) {
    const { openModal } = props;
    return (
        <div>
            <Button text="Add category" fn={() => openModal(ADD_CATEGORY)} />
            <Button text="Delete category" fn={() => openModal(DELETE_CATEGORY)} />
        </div>
    )
}

export default connect(null, { ...actions })(CategoryControl);
