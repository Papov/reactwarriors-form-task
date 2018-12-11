import React from "react";
import { Header } from "./header/Header";
import { Form } from "./form/Form";
import { Footer } from "./footer/Footer";
import {
  required,
  equal,
  moreThreeLetter,
  validEmail,
  validPhone
} from "../components/hoc/Validator";

export class App extends React.Component {
  state = {
    activeStep: 0,
    steps: ["basic", "contact", "avatar", "final"],
    value: {
      firstname: "",
      lastname: "",
      password: "",
      repeatPassword: "",
      email: "",
      phone: "",
      country: "",
      sity: "",
      avatar: ""
    },
    errors: {}
  };

  validate = event => {
    event.preventDefault();
    const { value } = this.state;
    let errors = {};
    // first step
    const { firstname, password, lastname, repeatPassword } = value;
    if (this.state.activeStep >= 0) {
      errors = {
        ...moreThreeLetter({ firstname, lastname }),
        ...required({ password }),
        ...equal({ password, repeatPassword })
      };
    }
    // second step
    const { email, phone, country, sity } = value;
    if (this.state.activeStep >= 1) {
      errors = {
        ...errors,
        ...validEmail({ email }),
        ...validPhone({ phone }),
        ...required({ country, sity })
      };
    }
    // third step

    if (Object.keys(errors).length) {
      this.setState(prevProps => ({
        errors: {
          ...prevProps.errors,
          ...errors
        }
      }));
    } else {
      this.changeActiveStep(1)();
    }
  };

  changeActiveStep = value => () => {
    this.setState({
      activeStep: this.state.activeStep + value
    });
  };

  onChangeInput = name => event => {
    const { value } = event.target;
    this.setState(prevState => ({
      value: {
        ...prevState.value,
        [name]: value
      },
      errors: {
        ...prevState.errors,
        [name]: null
      }
    }));
  };

  render() {
    const { steps, errors, value, activeStep } = this.state;
    const step = steps[activeStep];
    return (
      <div className="card card--middle position-fixed p-3 card--width">
        <Header steps={steps} activeStep={activeStep} />
        <Form
          onChangeInput={this.onChangeInput}
          step={step}
          value={value}
          errors={errors}
        />
        <Footer
          length={steps.length}
          validate={this.validate}
          activeStep={activeStep}
          changeActiveStep={this.changeActiveStep}
        />
      </div>
    );
  }
}
