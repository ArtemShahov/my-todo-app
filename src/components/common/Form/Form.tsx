import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import actions from "./state/actions";
import selectors from "./state/selectors";

const mapStateToProps = (state: RootState) => ({
  getFieldValue: (field: string) => selectors.getFieldValue(state, field),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface field {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export type FormComponentField = {
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (event: any) => void;
};

interface Props extends PropsFromRedux {
  fields: field[];
  submitFunc: (event: any) => void;
}

function Form(props: Props) {
  const { fields, submitFunc, getFieldValue, changeInputValue } = props;

  const useInputState = (field: field): FormComponentField => {
    return {
      name: field.name,
      label: field.label,
      type: field.type || "text",
      placeholder: field.placeholder || field.label,
      value: getFieldValue(field.name),
      onChange: (event: any) =>
        changeInputValue(field.name, event.target.value),
    };
  };

  
  const formFields = fields.map(useInputState);
  
  const clearForm = () => {
    formFields.forEach((field: FormComponentField) => {
      changeInputValue(field.name, '');
    })
  }

    function onSubmit(event: any) {
        event.preventDefault();
      const fieldsData = formFields.reduce((acc: any, field: FormComponentField) => {
        return {...acc, [field.name]: field.value}},{})
        submitFunc(fieldsData);
        clearForm();
    }
  return (
    <form>
      {formFields.map((field: FormComponentField) => (
        <label key={field.name}>
          {field.label}
          <input {...field} />
        </label>
      ))}
      <button type="submit" onClick={onSubmit}>
        Отправить
      </button>
    </form>
  );
}

export default connector(Form);
