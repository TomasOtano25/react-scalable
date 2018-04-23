import React from "react";
import PropTypes from "prop-types";

const LinkList = ({ links }) => {
  const linkNodes = links.map(l => (
    <section key={l.id}>
      <h1>{l.topicName}</h1>
      <div>
        {l.url} - {l.description}
      </div>
    </section>
  ));
  return <div>{linkNodes}</div>;
};

/*LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};*/

export default LinkList;
