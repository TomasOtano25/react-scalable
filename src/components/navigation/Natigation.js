import React from "react";
import Drawer from "../common/Drawer";

const Navigation = props => {
  /*const topicNodes = topics.map(t => (
    <div key={t.id} onClick={() => selectTopic(t)}>
      {t.name}
    </div>
  ));*/
  return (
    <div>
      {/*topicNodes*/}
      <Drawer {...props} />
    </div>
  );
};

export default Navigation;
