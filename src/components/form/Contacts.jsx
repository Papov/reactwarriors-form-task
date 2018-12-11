import React from "react";
import { UIInput } from "../ui/UIInput";

export class Contacts extends React.Component {
  render() {
    const { email, phone, country, sity, onChangeInput, errors } = this.props;
    return (
      <React.Fragment>
        <UIInput
          type="email"
          label="Email"
          id="email"
          value={email}
          onChange={onChangeInput("email")}
          error={errors.email}
        />
        <UIInput
          type="phone"
          label="Phone"
          id="phone"
          value={phone}
          onChange={onChangeInput("phone")}
          error={errors.phone}
        />
        <UIInput
          type="country"
          label="Country"
          id="country"
          value={country}
          onChange={onChangeInput("country")}
          error={errors.country}
        />
        <UIInput
          type="sity"
          label="Sity"
          id="sity"
          value={sity}
          onChange={onChangeInput("sity")}
          error={errors.sity}
        />
      </React.Fragment>
    );
  }
}
