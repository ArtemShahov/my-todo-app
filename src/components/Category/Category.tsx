import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { category_interface } from "../Categories/interfaces";
import actions from "../Categories/state/actions";
import selectors from "../Categories/state/selectors";
import "./styles.scss";

const mapStateToProps = (state: any) => ({
  activeCategoryId: selectors.getActiveCategory(state),
  categories: selectors.getCategories(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  parent?: string;
}

function Category(props: Props) {
  const { parent, categories, clickCategory, activeCategoryId } = props;

  function onClickHandler(categoryName: string) {
    if (clickCategory) clickCategory(categoryName);
  }

  return (
    <ul>
      {categories
        .filter((item: category_interface) => item.parent === parent)
        .map((item: category_interface) => {
          const children = categories.filter(
            (subItem: category_interface) => subItem.parent === item.name
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
              {!!children.length && <Category {...props} />}
            </li>
          );
        })}
    </ul>
  );
}

export default connector(Category);
