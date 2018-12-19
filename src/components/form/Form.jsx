import React from "react";
import { Basic } from "./Basic";
import { Contacts } from "./Contacts";
import { Avatar } from "./Avatar";
import { Final } from "./Final";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";

@inject(({ store }) => ({
  activeStepName: store.activeStepName
}))
@observer
class Form extends React.Component {
  static propTypes = {
    activeStepName: PropTypes.string.isRequired
  };
  render() {
    //console.log("form");
    const { activeStepName } = this.props;
    return (
      <form>
        {activeStepName === "basic" && <Basic />}
        {activeStepName === "contact" && <Contacts />}
        {activeStepName === "avatar" && <Avatar />}
        {activeStepName === "final" && <Final />}
      </form>
    );
  }
}

export { Form };
