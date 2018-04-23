import React from "react";
import PropTypes from "prop-types";

const HomaPage = ({ topics, selectTopic }) => {
  const topicNodes = topics.map(t => (
    <div key={t.id} onClick={() => selectTopic(t)}>
      {t.name}
    </div>
  ));
  return <div>{topicNodes}</div>;
};

HomaPage.propTypes = {
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
