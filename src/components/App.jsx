import React from "react";
import { Header } from "./header/Header";
import { Form } from "./form/Form";
import { Footer } from "./footer/Footer";
import {
  required,
  equal,
  moreNLetter,
  validEmail,
  validPhone
} from "../components/utils/validator";

const hoc = Component => Component;

@hoc
class App extends React.Component {
  state = {
    activeStep: 0,
    steps: ["basic", "contact", "avatar", "final"],
    values: {
      firstname: "",
      lastname: "",
      password: "",
      repeatPassword: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      avatar: ""
    },
    errors: {}
  };

  validate = event => {
    event.preventDefault();
    const { values } = this.state;
    let errors = {};
    // first step
    const { firstname, password, lastname, repeatPassword } = values;
    if (this.state.activeStep === 0) {
      errors = {
        ...moreNLetter({ firstname, lastname }, 3),
        ...required({ password }),
        ...equal({ password, repeatPassword })
      };
    }
    // second step
    const { email, phone, country, city } = values;
    if (this.state.activeStep === 1) {
      errors = {
        ...validEmail({ email }),
        ...validPhone({ phone }),
        ...required({ country, city })
      };
    }
    // third step
    const { avatar } = values;
    if (this.state.activeStep === 2) {
      errors = {
        ...required({ avatar })
      };
    }
    if (Object.keys(errors).length) {
      this.setState({
        errors: {
          ...errors
        }
      });
    } else {
      this.changeActiveStep(1);
    }
  };

  changeActiveStep = step => {
    this.setState({
      activeStep: this.state.activeStep + (step === 1 || -1)
    });
  };

  onChangeInput = event => {
    const { value, name } = event.target;
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value
      },
      errors: {
        ...prevState.errors,
        [name]: null
      }
    }));
  };

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

  render() {
    //console.log("app");
    const { steps, errors, values, activeStep, avatar } = this.state;
    return (
      <div className="card card--middle position-fixed p-3 card--width">
        <Header steps={steps} activeStep={activeStep} />
        <Form
          onChangeInput={this.onChangeInput}
          step={steps[activeStep]}
          values={values}
          errors={errors}
          onChangeAvatar={this.onChangeAvatar}
          avatar={avatar}
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

export { App };
