import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import actions from "./state/actions";
import Category from "./Category";
import CategoryControl from "./CategoryControl";
import selectors from "./state/selectors";
import { RootState } from "../../store/types";
import { Paper } from "@mui/material";

const mapStateToProps = (state: RootState) => ({
  activeCategoryId: selectors.getActiveCategoryId(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

function Categories(props: PropsFromRedux) {
  const { loadCategories, activeCategoryId } = props;

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <div>
      <CategoryControl activeCategoryId={activeCategoryId} />
      <Paper elevation={3}>
        <Category parentId={null} />
      </Paper>
    </div>
  );
}

export default connector(Categories);
