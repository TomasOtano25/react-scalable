import React from "react";
import PropTypes from "prop-types";
import Link from "../common/Link";
import { RoutesAddLink } from "../../routes";
import FloatButton from "../common/buttons/FloatButton";

const LinkList = ({ links, topicName, onClick }) => {
  const linkNodes = links.map(l => {
    return <Link key={l.id} link={l} />;
  });
  return (
    <div>
      <h1>{topicName}</h1>
      <div>{linkNodes}</div>

      <RoutesAddLink />

      <FloatButton onClick={onClick} />
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
