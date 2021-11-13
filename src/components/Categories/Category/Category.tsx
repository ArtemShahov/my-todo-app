import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import { category_interface } from "../interfaces";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import actions from "../state/actions";
import selectors from "../state/selectors";
import classes from "./styles.module.scss";

const mapStateToProps = (state: RootState) => ({
  activeCategoryId: selectors.getActiveCategoryId(state),
  categories: selectors.getCategories(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  parentId: string | null;
  nestedLevel?: number;
}

function Category(props: Props) {
  const { parentId, categories, setActiveCategory, activeCategoryId, nestedLevel } = props;
  const level = nestedLevel || 1;

  function checkNested(id: string): boolean {
    function getParentChain(id: string): string[] {
      const parent = categories.find((item: category_interface) => item.childrenId.includes(id));
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
    <List component="div" sx={{p: 0}}>
      {categories
        .filter((item: category_interface) => item.parentId === parentId)
        .map((item: category_interface) => {
          const children = categories.filter((subItem: category_interface) => subItem.parentId === item.id);
          return (
            <React.Fragment key={item.id}>
              <ListItemButton
                sx={{ pl: (level * 2) }}
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
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    ...(activeCategoryId === item.id && { variant: "button" }),
                  }}
                />
                {!!children.length && (activeCategoryId === item.id ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
              {!!children.length && (
                <Collapse in={activeCategoryId === item.id || checkNested(item.id)} timeout="auto" unmountOnExit>
                  <div >
                    <Category {...props} nestedLevel={level + 1} parentId={item.id} />
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
