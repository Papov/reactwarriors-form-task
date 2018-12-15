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
    values: PropTypes.object.isRequired
  };

  render() {
    //console.log("form");
    const { step, errors, values, onChangeInput, onChangeAvatar } = this.props;
    return (
      <form>
        {step === "basic" && (
          <Basic
            errors={errors}
            values={values}
            firstname={values.firstname}
            lastname={values.lastname}
            password={values.password}
            repeatPassword={values.repeatPassword}
            onChangeInput={onChangeInput}
          />
        )}
        {step === "contact" && (
          <Contacts
            errors={errors}
            onChangeInput={onChangeInput}
            email={values.email}
            phone={values.phone}
            country={values.country}
            city={values.city}
          />
        )}
        {step === "avatar" && (
          <Avatar
            errors={errors}
            avatar={values.avatar}
            onChangeAvatar={onChangeAvatar}
          />
        )}
        {step === "final" && <Final values={values} />}
      </form>
    );
  }
}
