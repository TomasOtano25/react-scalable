import React from "react";
import PropTypes from "prop-types";
//import styles from "./styles.css";
import styled from "styled-components";
import classNames from "classnames";
import Drawer from "material-ui/Drawer";
import IconButton from "material-ui/IconButton";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemText } from "material-ui/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ButtonIcon from "./buttons/IconButton";

const IconDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DrawerDiv = styled.div`
  width: 250px;
`;

const DrawerComponent = ({
  topics,
  selectTopic,
  isDrawerOpen,
  toogleDrawer,
  stateDrawerOpen
}) => {
  const theme = true;
  const topicNode = topics.map(topic => (
    <ListItem
      button
      key={topic.id}
      onClick={() => {
        selectTopic(topic);
        toogleDrawer();
      }}
    >
      <ListItemText primary={topic.name} />
      <ButtonIcon />
    </ListItem>
  ));

  /*className={classNames(styles.drawer, {
          [styles.drawerOpen]: isDrawerOpen
        })
      >*/
  return (
    <div>
      <Drawer open={stateDrawerOpen} onClose={toogleDrawer}>
        <DrawerDiv>
          <IconDiv>
            <IconButton onClick={toogleDrawer}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </IconDiv>
          <Divider />
          <div tabIndex={0} role="button">
            <List>{topicNode}</List>
          </div>
        </DrawerDiv>
      </Drawer>
    </div>
  );
};

DrawerComponent.proptypes = {
  topics: PropTypes.array.isRequired,
  selectTopic: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired
};

export default DrawerComponent;
