import React from "react";
import { Basic } from "./Basic";
import { Contacts } from "./Contacts";
import { Avatar } from "./Avatar";
import { Final } from "./Final";

export class Form extends React.Component {
  render() {
    const { step, errors, value, onChangeInput } = this.props;
    const { firstname, lastname, password, repeatPassword } = value;
    const { email, phone, country, sity } = value;
    const { avatar } = value;
    return (
      <form>
        {step === "basic" && (
          <Basic
            errors={errors}
            value={value}
            firstname={firstname}
            lastname={lastname}
            password={password}
            repeatPassword={repeatPassword}
            onChangeInput={onChangeInput}
          />
        )}
        {step === "contact" && (
          <Contacts
            errors={errors}
            onChangeInput={onChangeInput}
            email={email}
            phone={phone}
            country={country}
            sity={sity}
          />
        )}
        {step === "avatar" && (
          <Avatar
            errors={errors}
            avatar={avatar}
            onChangeInput={onChangeInput}
          />
        )}
        {step === "final" && (
          <Final errors={errors} value={value} onChangeInput={onChangeInput} />
        )}
      </form>
    );
  }
}
