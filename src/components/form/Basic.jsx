import React from "react";
import { UIInput } from "../ui/UIInput";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";

@inject(({ store }) => ({
  onChangeInput: store.onChangeInput,
  errors: store.errors,
  values: store.values
}))
@observer
class Basic extends React.Component {
  static propTypes = {
    onChangeInput: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };

  render() {
    //console.log("basic");
    const { onChangeInput, errors, values } = this.props;
    return (
      <React.Fragment>
        <UIInput
          type="text"
          label="Name"
          id="firstname"
          value={values.firstname}
          onChange={onChangeInput}
          error={errors.firstname}
        />
        <UIInput
          type="text"
          label="Surname"
          id="lastname"
          value={values.lastname}
          onChange={onChangeInput}
          error={errors.lastname}
        />
        <UIInput
          type="password"
          label="Password"
          id="password"
          value={values.password}
          onChange={onChangeInput}
          error={errors.password}
        />
        <UIInput
          type="password"
          label="Repeat password"
          id="repeatPassword"
          value={values.repeatPassword}
          onChange={onChangeInput}
          error={errors.repeatPassword}
        />
      </React.Fragment>
    );
  }
}

export { Basic };
