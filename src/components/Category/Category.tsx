import React from "react";
import { connect } from "react-redux";
import { category_interface } from "../Categories/interfaces";
import actions from "../Categories/state/actions";

interface CategoryProps {
  parent?: string;
  categories: category_interface[];
}

function Category(props: CategoryProps) {
  const { parent, categories } = props;
  return (
    <ul>
      {categories
        .filter((item: category_interface) => item.parent === parent)
        .map((item: category_interface) => {
          const children = categories.filter(
            (subItem: category_interface) => subItem.parent === item.name
          );
          if (!children.length) {
            return <li key={item.name}>{item.name}</li>;
          } else {
            return (
              <li key={item.name}>
                {item.name}
                  <Category categories={categories} parent={item.name} />

              </li>
            );
          }
        })}
    </ul>
  );
}

export default connect(null, { ...actions })(Category);
