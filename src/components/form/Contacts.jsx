import React from "react";
import { UIInput } from "../ui/UIInput";
import { UISelect } from "../ui/UISelect";

export class Contacts extends React.PureComponent {
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
      sity,
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
        <UISelect
          label="Country"
          id="country"
          value={country}
          onChange={onChangeInput("country")}
          error={errors.country}
          child={countryList}
        />
        <UISelect
          label="Sity"
          id="sity"
          value={sity}
          onChange={onChangeInput("sity")}
          error={errors.sity}
          child={cityList[country]}
        />
      </React.Fragment>
    );
  }
}
