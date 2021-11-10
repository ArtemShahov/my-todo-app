/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import Categories from "../../Categories";
import actions from "../../Categories/state/actions";
import selectors from "../../Categories/state/selectors";
import TodoItem from "../../TodoItem";
import { todo_interface } from "../../TodoItem/interface";
import "./styles.scss";

const mapStateToProps = (state: RootState) => ({
    activeCategory: selectors.getActiveCategory(state),
    todoItems: selectors.getTodoItems(state),
  });

const connector = connect(mapStateToProps, {...actions});

type PropsFromRedux = ConnectedProps<typeof connector>;


function Main (props: PropsFromRedux) {
    const { activeCategory, loadTodoItems, todoItems } = props;

    useEffect(() => {
        loadTodoItems();
    }, []);

    return (<main className="main">
        <Categories />
        {activeCategory ? 
            todoItems
            .filter((item: todo_interface) => item.parentId === activeCategory.id)
            .map((item: todo_interface) => <TodoItem {...item} />)
            // activeCategory.itemsId.map((itemId: string) => {
            //     const todoItem = todoItems.find((item: todo_interface) => item.id === itemId);
            //     return <TodoItem title={todoItem.title} content={todoItem.content} />
            // })
         : 'choose'}
    </main>);
    

}

export default connector(Main);
