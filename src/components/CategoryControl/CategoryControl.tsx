import React from "react";
import { connect } from "react-redux";
import Button from "../common/Button";
import actions from "../common/Modal/state/actions";
import { ADD_CATEGORY, ADD_TODO_ITEM, DELETE_CATEGORY, ModalName } from "../common/Modal/state/modalTypes";

interface Props {
    openModal: (modalName: ModalName) => void;
    activeCategoryId: string;
}

function CategoryControl (props: Props) {
    const { openModal, activeCategoryId } = props;
    return (
        <div>
            <Button text="Add category" fn={() => openModal(ADD_CATEGORY)} />
            <Button text="Delete category" disabled={!activeCategoryId} fn={() => openModal(DELETE_CATEGORY)} />
            <Button text="Add todo item" fn={() => openModal(ADD_TODO_ITEM)} />
        </div>
    )
}

export default connect(null, { ...actions })(CategoryControl);
