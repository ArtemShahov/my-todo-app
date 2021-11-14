/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import Category from "../../Categories/Category";
import CategoryControl from "../../Categories/CategoryControl";
import actions from "../../Categories/state/actions";
import selectors from "../../Categories/state/selectors";
import { todo_interface } from "../../common/TodoItem/interface";
import TodoItems from "../../TodoItems";
import classes from "./styles.module.scss";

const mapStateToProps = (state: RootState) => ({
  activeCategory: selectors.getActiveCategory(state),
  activeCategoryId: selectors.getActiveCategoryId(state),
  todoItems: selectors.getTodoItems(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

function Main(props: PropsFromRedux) {
  const { activeCategory, loadTodoItems, todoItems, activeCategoryId, loadCategories, setActiveCategory } = props;

  useEffect(() => {
    loadTodoItems();
    loadCategories();
  }, []);

  const items = activeCategory
    ? todoItems.filter((item: todo_interface) => item.parentId === activeCategory.id)
    : todoItems;

  return (
    <main>
      <CategoryControl activeCategoryId={activeCategoryId} />
      <div className={classes.mainContent}>
        <div>
          <Paper elevation={3}>
            <Box sx={{ p: 1 }}>
              <Button onClick={() => setActiveCategory(null)}>All</Button>
            </Box>
            <Category parentId={null} />
          </Paper>
        </div>
        <div>
          <TodoItems items={items} />
        </div>
      </div>
    </main>
  );
}

export default connector(Main);
