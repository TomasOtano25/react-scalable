import React from "react";
import PropTypes from "prop-types";
import Link from "../common/Link";

const LinkList = ({ links, topicName }) => {
  const linkNodes = links.map(l => {
    return <Link key={l.id} link={l} />;
  });
  return (
    <div>
      <h1>{topicName}</h1>
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
