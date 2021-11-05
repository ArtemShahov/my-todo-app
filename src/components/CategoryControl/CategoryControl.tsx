import React from "react";
import { connect } from "react-redux";
import Button from "../common/Button";
import actions from "../common/Modal/state/actions";
import { ADD_CATEGORY, ModalName } from "../common/Modal/state/modalTypes";

interface Props {
    openModal: (modalName: ModalName) => void
}

function CategoryControl (props: Props) {
    const { openModal } = props;
    const onClickHandler = () => openModal(ADD_CATEGORY)
    return (
        <div>
            <Button text="Add category" fn={onClickHandler} />
        </div>
    )
}

export default connect(null, { ...actions })(CategoryControl);
