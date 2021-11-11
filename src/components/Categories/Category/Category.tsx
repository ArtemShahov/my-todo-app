import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import { category_interface } from "../interfaces";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import actions from "../state/actions";
import selectors from "../state/selectors";
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

  function checkNested(id: string): boolean {
    function getParentChain(id: string): string[] {
      const parent = categories.find((item: category_interface) =>
        item.childrenId.includes(id)
      );
      if (parent) {
        return [parent.id, ...getParentChain(parent.id)];
      }
      return [""];
    }
    const categoryChain = getParentChain(activeCategoryId);
    if (categoryChain.includes(id)) return true;
    return false;
  }

  function onClickHandler(categoryId: string) {
    setActiveCategory(categoryId);
  }

  return (
    <List component="div">
      {categories
        .filter((item: category_interface) => item.parentId === parentId)
        .map((item: category_interface) => {
          const children = categories.filter(
            (subItem: category_interface) => subItem.parentId === item.id
          );
          return (
            <React.Fragment key={item.id}>
              <ListItemButton
                sx={{ color: "text.primary" }}
                onClick={() => {
                  onClickHandler(item.id);
                }}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    fontWeight: "700",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                />
                {!!children.length &&
                  (activeCategoryId === item.id ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  ))}
              </ListItemButton>
              {!!children.length && (
                <Collapse
                  in={activeCategoryId === item.id || checkNested(item.id)}
                  timeout="auto"
                  unmountOnExit
                >
                  <div className="nested-list">
                    <Category {...props} parentId={item.id} />
                  </div>
                </Collapse>
              )}
            </React.Fragment>
          );
        })}
    </List>
  );
}

export default connector(Category);
