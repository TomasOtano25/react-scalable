import React from "react";
import PropTypes from "prop-types";
import LinkListContainer from "../../containers/linkList/LinkListContainer";
import AppBar from "../../components/appBar/AppBar";
import Navigation from "../navigation/Natigation";
import { RoutesHome } from "../../routes";

const HomaPage = props => {
  return (
    <div>
      <AppBar {...props} />
      <Navigation {...props} />
      <RoutesHome />
      {/*<LinkListContainer />*/}
    </div>
  );
};

HomaPage.propTypes = {
  toogleDrawer: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ),
  selectTopic: PropTypes.func.isRequired
};

export default HomaPage;
