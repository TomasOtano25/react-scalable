import React from "react";
import PropTypes from "prop-types";
import Link from "../common/Link";

const LinkList = ({ links, routeTopicName }) => {
  let topic = null;
  const linkNodes = links.map(l => {
    topic = l.topicName;
    return <Link key={l.id} link={l} />;
  });
  return (
    <div>
      <h1>{topic}</h1>
      <div>{linkNodes}</div>
    </div>
  );
};

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default LinkList;
