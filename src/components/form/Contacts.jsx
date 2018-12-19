import React from "react";
import { UIInput } from "../ui/UIInput";
import { UISelect } from "../ui/UISelect";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

@inject(({ store }) => ({
  onChangeInput: store.onChangeInput,
  errors: store.errors,
  values: store.values,
  getCountries: store.getCountries,
  getCities: store.getCities
}))
@observer
class Contacts extends React.Component {
  static propTypes = {
    onChangeInput: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string
  };

  render() {
    //console.log("contacts");
    const {
      onChangeInput,
      errors,
      values,
      getCountries,
      getCities
    } = this.props;
    return (
      <React.Fragment>
        <UIInput
          type="email"
          label="Email"
          id="email"
          value={values.email}
          onChange={onChangeInput}
          error={errors.email}
        />
        <UIInput
          type="phone"
          label="Phone"
          id="phone"
          value={values.phone}
          onChange={onChangeInput}
          error={errors.phone}
        />
        <UISelect
          label="Country"
          id="country"
          value={values.country}
          onChange={onChangeInput}
          error={errors.country}
          child={getCountries}
        />
        <UISelect
          label="City"
          id="city"
          value={values.city}
          onChange={onChangeInput}
          error={errors.city}
          child={getCities}
        />
      </React.Fragment>
    );
  }
}

export { Contacts };
