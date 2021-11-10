/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import Categories from "../../Categories";
import actions from "../../Categories/state/actions";
import selectors from "../../Categories/state/selectors";

const mapStateToProps = (state: RootState) => ({
    activeCategory: selectors.getActiveCategory(state),
  });

const connector = connect(mapStateToProps, {...actions});

type PropsFromRedux = ConnectedProps<typeof connector>;


function Main (props: PropsFromRedux) {
    const { activeCategory, loadTodoItems } = props;

    useEffect(() => {
        loadTodoItems();
    }, []);

    return (<main>
        <Categories />
        {activeCategory && (activeCategory.name + ' ' + activeCategory.itemsId)}
    </main>);
    

}

export default connector(Main);
