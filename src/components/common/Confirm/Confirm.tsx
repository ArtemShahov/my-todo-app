import React from "react";
import Button from "../Button";

interface Props {
    title: string,
    callback: () => void,
    close?: any,
}

function Confirm(props: Props) {
    const { title, callback, close } = props;
    const onClickHandler = (result: boolean) => {
        close();
        if (result) {
            callback();
        }
    } 
    return <div>
        <h4>{title}</h4>
        <Button text="Yes" fn={() => onClickHandler(true)} />
        <Button text="No" fn={() => onClickHandler(false)} />
    </div>

}

export default Confirm;
