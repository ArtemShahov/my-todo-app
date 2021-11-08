import React from "react";

type field = {
    type: string,
    placeHolder: string,
    inputHook: {value: string, onChange: (event: any) => void}
}

interface Props {
    fields: field[],
    submitFunc: (event: any) => void,
}

function Form (props: Props) {
    const { fields, submitFunc } = props;
    return (<form>
        {fields.map((field: field) => (
            <input type={field.type} placeholder={field.placeHolder} {...field.inputHook} />
        ))}
        <button type="submit" onClick={submitFunc}>Отправить</button>
    </form>)
}

export default Form;
