import React from "react";

export type FormComponentField = {
  name?: string;
  type?: string;
  placeHolder: string;
  label: string;
  valueHandler: { value: string; onChange: (event: any) => void };
};

interface Props {
  fields: FormComponentField[];
  submitFunc: (event: any) => void;
}

function Form(props: Props) {
  const { fields, submitFunc } = props;
  return (
    <form>
      {fields.map((field: FormComponentField) => (
        <label key={field.name}>
          {field.label}
          <input
            type={field.type}
            placeholder={field.placeHolder}
            {...field.valueHandler}
          />
        </label>
      ))}
      <button type="button" onClick={submitFunc}>
        Отправить
      </button>
    </form>
  );
}

export default Form;
