import React from "react";
import { UIInput } from "../ui/UIInput";
import { UISelect } from "../ui/UISelect";
import PropTypes from "prop-types";
import countries from "../../data/countries";
import cities from "../../data/cities";

export class Contacts extends React.PureComponent {
  static propTypes = {
    onChangeInput: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string
  };

  getCities = id => {
    return Object.entries(cities).reduce((accam, item) => {
      if (item[1].country === Number(id)) {
        accam.push({ value: item[0], name: item[1].name });
      }
      return accam;
    }, []);
  };

  getCountries = () => {
    let country = countries.map(item => ({ value: item.id, name: item.name }));
    return country;
  };

  render() {
    //console.log("contacts");
    const { email, phone, country, city, onChangeInput, errors } = this.props;
    const cityData = this.getCities(country);
    const countryData = this.getCountries();
    return (
      <React.Fragment>
        <UIInput
          type="email"
          label="Email"
          id="email"
          value={email}
          onChange={onChangeInput}
          error={errors.email}
        />
        <UIInput
          type="phone"
          label="Phone"
          id="phone"
          value={phone}
          onChange={onChangeInput}
          error={errors.phone}
        />
        <UISelect
          label="Country"
          id="country"
          value={country}
          onChange={onChangeInput}
          error={errors.country}
          child={countryData}
        />
        <UISelect
          label="City"
          id="city"
          value={city}
          onChange={onChangeInput}
          error={errors.city}
          child={cityData}
        />
      </React.Fragment>
    );
  }
}
