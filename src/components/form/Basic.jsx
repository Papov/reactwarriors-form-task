import React from "react";
import { UIInput } from "../ui/UIInput";

export class Basic extends React.Component {
  render() {
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
          onChange={onChangeInput("firstname")}
          error={errors.firstname}
        />
        <UIInput
          type="text"
          label="Surname"
          id="lastname"
          value={lastname}
          onChange={onChangeInput("lastname")}
          error={errors.lastname}
        />
        <UIInput
          type="password"
          label="Password"
          id="password"
          value={password}
          onChange={onChangeInput("password")}
          error={errors.password}
        />
        <UIInput
          type="password"
          label="Repeat password"
          id="repeatPassword"
          value={repeatPassword}
          onChange={onChangeInput("repeatPassword")}
          error={errors.repeatPassword}
        />
      </React.Fragment>
    );
  }
}
