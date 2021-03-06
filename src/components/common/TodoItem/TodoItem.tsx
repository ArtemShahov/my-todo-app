import { Button, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import actions from "../../Categories/state/actions";
import classes from "./styles.module.scss";

const mapStateToProps = (state: RootState) => ({});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  id: string;
  title: string;
  content: string;
  parentId: string;
  isDone: boolean;
}

function TodoItem(props: Props) {
  const { id, title, content, parentId, deleteTodoItem, changeTodoItemStatus, isDone } = props;
  const doneTextStyle = isDone && { color: "divider" };

  return (
    <Paper className={classes.todoItems} elevation={isDone ? 3 : 6} sx={{ p: 2, border: 1, boxShadow: 0, borderColor: "divider" }}>
      <header className={classes.todoItemHeader}>
        <div className={classes.todoItemTitle}>
          <Typography
          className={classes.todoItemTitleText}
            sx={{
              m: 0,
              textOverflow: "ellipsis",
              overflow: "hidden",
              ...doneTextStyle,
            }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {title}
          </Typography>
          <IconButton disabled={isDone}>
            <EditIcon fontSize="small" />
          </IconButton>
        </div>
        <IconButton aria-label="delete" onClick={() => deleteTodoItem({ id, parentId })}>
          <DeleteOutlineIcon />
        </IconButton>
      </header>
      <Typography
      className={classes.todoItemContent}
        sx={{ ...doneTextStyle }}
        variant="body1"
        color="text.secondary"
      >
        {content}
      </Typography>
      <footer className={classes.todoItemFooter}>
        <Button variant="outlined" onClick={() => changeTodoItemStatus({ id })}>{!isDone ? "Done" : "Cancel"}</Button>
      </footer>
    </Paper>
  );
}

export default connector(TodoItem);
