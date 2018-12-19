import React from "react";
import { Header } from "./header/Header";
import { Form } from "./form/Form";
import { Footer } from "./footer/Footer";
import { inject, observer } from "mobx-react";

@inject(({ store }) => ({
  values: store.values,
  activeStep: store.activeStep,
  changeActiveStep: store.changeActiveStep
}))
@observer
class App extends React.Component {
  render() {
    //console.log("app");
    return (
      <div className="card card--middle position-fixed p-3 card--width">
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export { App };
