import { IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import actions from "../../Categories/state/actions";
import "./styles.scss";

const mapStateToProps = (state: RootState) => ({
  // activeCategory: selectors.getActiveCategory(state),
  // todoItems: selectors.getTodoItems(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  id: string;
  title: string;
  content: string;
  parentId: string;
}

function TodoItem(props: Props) {
  const { id, title, content, parentId, deleteTodoItem } = props;

  function onClickHandler() {
    deleteTodoItem({ id, parentId });
  }
  return (
    <Paper elevation={4} sx={{ p: 2, border: 1, borderColor: "divider" }}>
      <header className="todo-item__header">
        <div className="todo-item__title">
          <Typography sx={{ m: 0, textOverflow: "ellipsis", overflow: "hidden" }} gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <IconButton>
            <EditIcon fontSize="small" />
          </IconButton>
        </div>
        <IconButton aria-label="delete" onClick={onClickHandler}>
          <DeleteOutlineIcon />
        </IconButton>
      </header>
      <Typography sx={{textOverflow: "ellipsis", overflow: "hidden" }} variant="body1" color="text.secondary">
        {content}
      </Typography>
    </Paper>
  );
}

export default connector(TodoItem);
