import React from "react";
import { UIInput } from "../ui/UIInput";
import { UISelect } from "../ui/UISelect";
import PropTypes from "prop-types";

export class Contacts extends React.PureComponent {
  static propTypes = {
    onChangeInput: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string
  };

  static defaultProps = {
    countryList: ["Ukraine", "Germany", "France", "Spain", "USA"],
    cityList: {
      Ukraine: ["Kyiv", "Lviv", "Odessa", "Dnipro", "Kharkiv"],
      Germany: ["Berlin", "Dortmund", "Drezden", "Humburg", "Koln"],
      France: ["Paris", "Lyon", "Toulouse", "Marseille", "Bordeaux"],
      Spain: ["Madrid", "Barcelona", "Sevilla", "Bilbo", "Malaga"],
      USA: ["Washington", "San-Francisco", "New-York", "Las-Vegas", "Miami"]
    }
  };

  render() {
    //console.log("contacts");
    const {
      email,
      phone,
      country,
      city,
      onChangeInput,
      errors,
      cityList,
      countryList
    } = this.props;
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
          child={countryList}
        />
        <UISelect
          label="City"
          id="city"
          value={city}
          onChange={onChangeInput}
          error={errors.city}
          child={cityList[country]}
        />
      </React.Fragment>
    );
  }
}
