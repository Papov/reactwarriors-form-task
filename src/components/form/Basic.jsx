import React from "react";
import { UIInput } from "../ui/UIInput";
import PropTypes from "prop-types";

export class Basic extends React.PureComponent {
  static propTypes = {
    onChangeInput: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    password: PropTypes.string,
    repeatPassword: PropTypes.string
  };

  render() {
    //console.log("basic");
    const {
      onChangeInput,
      errors,
      firstname,
      lastname,
      password,
      repeatPassword
    } = this.props;
    return (
      <React.Fragment>
        <UIInput
          type="text"
          label="Name"
          id="firstname"
          value={firstname}
          onChange={onChangeInput}
          error={errors.firstname}
        />
        <UIInput
          type="text"
          label="Surname"
          id="lastname"
          value={lastname}
          onChange={onChangeInput}
          error={errors.lastname}
        />
        <UIInput
          type="password"
          label="Password"
          id="password"
          value={password}
          onChange={onChangeInput}
          error={errors.password}
        />
        <UIInput
          type="password"
          label="Repeat password"
          id="repeatPassword"
          value={repeatPassword}
          onChange={onChangeInput}
          error={errors.repeatPassword}
        />
      </React.Fragment>
    );
  }
}
