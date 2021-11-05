import React from "react";
import { connect } from "react-redux";
import { category_interface } from "../Categories/interfaces";
import selectors from "../Categories/state/selectors";
import "./styles.scss";

interface Props {
  parent?: string;
  categories: category_interface[];
  clickCategory?: (categoryName: string) => void;
  activeCategoryName?: string;
}

function Category(props: Props) {
  const { parent, categories, clickCategory, activeCategoryName } = props;

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
            <li key={item.name}>
              <span
                className={`list-item ${
                  activeCategoryName === item.name ? "active" : ""
                }`}
                onClick={() => onClickHandler(item.name)}
              >
                {item.name}
              </span>
              {!!children.length && (
                <Category
                  activeCategoryName={activeCategoryName}
                  categories={categories}
                  parent={item.name}
                  clickCategory={clickCategory}
                />
              )}
            </li>
          );
        })}
    </ul>
  );
}

const mapStateToProps = (state: any) => ({
  activeCategoryName: selectors.getActiveCategory(state),
});

export default connect(mapStateToProps)(Category);
