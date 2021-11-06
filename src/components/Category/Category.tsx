import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/types";
import { category_interface } from "../Categories/interfaces";
import actions from "../Categories/state/actions";
import selectors from "../Categories/state/selectors";
import "./styles.scss";

const mapStateToProps = (state: RootState) => ({
  activeCategoryId: selectors.getActiveCategory(state),
  categories: selectors.getCategories(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  parentId?: string | null;
}

function Category(props: Props) {
  const { parentId, categories, clickCategory, activeCategoryId } = props;

  function onClickHandler(categoryId: string) {
    clickCategory(categoryId);
  }
  console.log(parentId)

  return (
    <ul>
      {categories
        .filter((item: category_interface) => item.parentId === parentId)
        .map((item: category_interface) => {
          const children = categories.filter(
            (subItem: category_interface) => subItem.parentId === item._id
          );
          return (
            <li key={item._id}>
              <span
                className={`list-item ${
                  activeCategoryId === item._id ? "active" : ""
                }`}
                onClick={() => onClickHandler(item._id)}
              >
                {item.name}
              </span>
              {!!children.length && <Category {...props} parentId={item._id} />}
            </li>
          );
        })}
    </ul>
  );
}

export default connector(Category);
