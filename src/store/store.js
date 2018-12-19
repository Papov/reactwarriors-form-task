import { observable, action, computed } from "mobx";
import countries from "../data/countries";
import cities from "../data/cities";

import {
  required,
  equal,
  moreNLetter,
  validEmail,
  validPhone
} from "../components/utils/validator";

class Store {
  steps = ["basic", "contact", "avatar", "final"];

  @observable
  activeStep = 0;
  @observable
  values = {
    firstname: "",
    lastname: "",
    password: "",
    repeatPassword: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    avatar: ""
  };
  @observable
  errors = {};

  @action
  onChangeInput = event => {
    const { value, name } = event.target;
    this.values[name] = value;
    this.errors[name] = null;
  };
  @action
  changeActiveStep = step => {
    this.activeStep = this.activeStep + (step === 1 || -1);
  };
  @action
  onChangeAvatar = event => {
    let reader = new FileReader();
    reader.onloadend = event => {
      this.onChangeInput({
        target: {
          name: "avatar",
          value: event.target.result
        }
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };
  @action
  validate = event => {
    event.preventDefault();
    let errors = {};
    // first step
    const { firstname, password, lastname, repeatPassword } = this.values;
    if (this.activeStep === 0) {
      errors = {
        ...moreNLetter({ firstname, lastname }, 3),
        ...required({ password }),
        ...equal({ password, repeatPassword })
      };
    }
    // second step
    const { email, phone, country, city } = this.values;
    if (this.activeStep === 1) {
      errors = {
        ...validEmail({ email }),
        ...validPhone({ phone }),
        ...required({ country, city })
      };
    }
    // third step
    const { avatar } = this.values;
    if (this.activeStep === 2) {
      errors = {
        ...required({ avatar })
      };
    }
    if (Object.keys(errors).length) {
      this.errors = errors;
    } else {
      this.changeActiveStep(1);
    }
  };

  @computed get activeStepName() {
    return this.steps[this.activeStep];
  }
  @computed get stepsLength() {
    return this.steps.length;
  }
  @computed get getCountries() {
    return countries.map(item => ({ value: item.id, name: item.name }));
  }
  @computed get getCities() {
    return Object.entries(cities).reduce((accam, item) => {
      if (item[1].country === Number(this.values.country)) {
        accam.push({ value: item[0], name: item[1].name });
      }
      return accam;
    }, []);
  }
}

export const store = new Store();
