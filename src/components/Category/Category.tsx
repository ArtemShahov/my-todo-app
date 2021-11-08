import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/types";
import { category_interface } from "../Categories/interfaces";
import actions from "../Categories/state/actions";
import selectors from "../Categories/state/selectors";
import "./styles.scss";

const mapStateToProps = (state: RootState) => ({
  activeCategoryId: selectors.getActiveCategoryId(state),
  categories: selectors.getCategories(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  parentId?: string | null;
}

function Category(props: Props) {
  const { parentId, categories, setActiveCategory, activeCategoryId } = props;

  function onClickHandler(categoryId: string) {
    setActiveCategory(categoryId);
  }

  return (
    <ul>
      {categories
        .filter((item: category_interface) => item.parentId === parentId)
        .map((item: category_interface) => {
          const children = categories.filter(
            (subItem: category_interface) => subItem.parentId === item.id
          );
          return (
            <li key={item.id}>
              <span
                className={`list-item ${
                  activeCategoryId === item.id ? "active" : ""
                }`}
                onClick={() => onClickHandler(item.id)}
              >
                {item.name}
              </span>
              {!!children.length && <Category {...props} parentId={item.id} />}
            </li>
          );
        })}
    </ul>
  );
}

export default connector(Category);
