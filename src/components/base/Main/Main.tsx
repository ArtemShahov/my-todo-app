import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import Categories from "../../Categories";
import selectors from "../../Categories/state/selectors";

const mapStateToProps = (state: RootState) => ({
    activeCategory: selectors.getActiveCategory(state),
  });

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


function Main (props: PropsFromRedux) {
    const { activeCategory } = props;
    return (<main>
        <Categories />
        {activeCategory && activeCategory.name}
    </main>);
    

}

export default connector(Main);
