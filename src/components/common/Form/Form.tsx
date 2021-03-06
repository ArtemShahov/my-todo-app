import { Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import actions from "./state/actions";
import selectors from "./state/selectors";
import Button from "../Button";
import classes from './styles.module.scss';

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
  title: string;
  fields: field[];
  submitFunc: (event: any) => void;
}

function Form(props: Props) {
  const { title, fields, submitFunc, getFieldValue, changeInputValue } = props;

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
      changeInputValue(field.name, "");
    });
  };

  function onSubmit(event: any) {
    event.preventDefault();
    const fieldsData = formFields.reduce(
      (acc: any, field: FormComponentField) => {
        return { ...acc, [field.name]: field.value };
      },
      {}
    );
    submitFunc(fieldsData);
    clearForm();
  }
  return (
    <Paper elevation={3}>
      <div className={classes.form}>
      <Typography sx={{ textOverflow: "ellipsis", overflow: "hidden" }} variant="h5" gutterBottom component="div">{title}</Typography>
        <form autoComplete="off" className={classes.formFields}>
          {formFields.map((field: FormComponentField) => (
            <TextField
              key={field.name}
              label={field.label}
              value={field.value}
              onChange={field.onChange}
              variant="outlined"
            />
          ))}
          <Button text="Send" fn={onSubmit} />
        </form>
      </div>
    </Paper>
  );
}

export default connector(Form);
