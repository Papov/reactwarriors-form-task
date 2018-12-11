import React from "react";
import { Header } from "./header/Header";
import { Form } from "./form/Form";
import { Footer } from "./footer/Footer";

export class App extends React.Component {
  static defaultProps = {
    messages: {
      firstname: "write your name, must be more 5 letters",
      lastname: "write your surname, must be more 5 letters",
      password: "write your password",
      repeatPassword: "passwords must be equal",
      email: "invalid mail",
      phone: "invalid phone",
      country: "required",
      sity: "required"
    }
  };

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
      sity: ""
    },
    errors: {}
  };

  validate = event => {
    event.preventDefault();
    const { value } = this.state;
    const { messages } = this.props;

    const errors = {};

    if (value.firstname.length < 5) {
      errors.firstname = messages.firstname;
    }
    if (value.lastname.length < 5) {
      errors.lastname = messages.lastname;
    }
    if (!value.password.length) {
      errors.password = messages.password;
    }
    if (value.password !== value.repeatPassword) {
      errors.repeatPassword = messages.repeatPassword;
    }

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
      <div className="card card--middle position-fixed p-2 card--width">
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
