import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/types";
import { category_interface } from "../Categories/interfaces";
import actions from "../Categories/state/actions";
import selectors from "../Categories/state/selectors";

const mapStateToProps = (state: RootState) => ({
  getFieldValue: (field: any) => selectors.getFieldValue(state, field),
  parentId: selectors.getActiveCategory(state),
  categories: selectors.getCategories(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

function AddCategoryForm(props: Props) {
  const { getFieldValue, changeInputValue, addCategory, parentId, categories } = props;
  const parent = categories.find((item: category_interface) => item._id === parentId);
  const parentName = parent ? parent.name : undefined;

  function useInputState(field: string) {
    return {
      value: getFieldValue(field),
      onChange: (event: any) => changeInputValue(field, event.target.value),
    };
  }

  function onSubmitHandler(event: any) {
    console.log(event);
    event.preventDefault();
    addCategory(getFieldValue("categoryName"), parentName);
  }

  const categoryName = useInputState("categoryName");

  return (
    <div>
      <h3>Add new category{parentName ? ` in ${parentName}` : ''}</h3>
      <form>
        <input type="text" {...categoryName} />
        <button type="button" onClick={onSubmitHandler}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, { ...actions })(AddCategoryForm);
