import React from "react";
import { Basic } from "./Basic";
import { Contacts } from "./Contacts";
import { Avatar } from "./Avatar";
import { Final } from "./Final";
import PropTypes from "prop-types";

export class Form extends React.Component {
  static propTypes = {
    onChangeInput: PropTypes.func.isRequired,
    onChangeAvatar: PropTypes.func.isRequired,
    step: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    value: PropTypes.object.isRequired
  };

  render() {
    //console.log("form");
    const { step, errors, value, onChangeInput, onChangeAvatar } = this.props;
    return (
      <form>
        {step === "basic" && (
          <Basic
            errors={errors}
            value={value}
            firstname={value.firstname}
            lastname={value.lastname}
            password={value.password}
            repeatPassword={value.repeatPassword}
            onChangeInput={onChangeInput}
          />
        )}
        {step === "contact" && (
          <Contacts
            errors={errors}
            onChangeInput={onChangeInput}
            email={value.email}
            phone={value.phone}
            country={value.country}
            city={value.city}
          />
        )}
        {step === "avatar" && (
          <Avatar
            errors={errors}
            avatar={value.avatar}
            onChangeAvatar={onChangeAvatar}
          />
        )}
        {step === "final" && <Final value={value} />}
      </form>
    );
  }
}
