import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

@inject(({ store }) => ({
  changeActiveStep: store.changeActiveStep,
  activeStep: store.activeStep,
  stepsLength: store.stepsLength,
  validate: store.validate
}))
@observer
class Footer extends React.Component {
  static propTypes = {
    changeActiveStep: PropTypes.func.isRequired,
    activeStep: PropTypes.number.isRequired,
    validate: PropTypes.func.isRequired,
    stepsLength: PropTypes.number.isRequired
  };

  onHandleSubmit = event => {
    event.preventDefault();
  };

  render() {
    // console.log("footer");
    const { validate, activeStep, changeActiveStep, stepsLength } = this.props;
    return (
      <div className="btn-group btn-group-sm mt-2" role="group">
        <button
          type="button"
          className="btn btn-secondary btn-form"
          disabled={activeStep === 0}
          onClick={changeActiveStep}
        >
          back
        </button>
        {stepsLength - 1 === activeStep ? (
          <button
            type="button"
            onClick={this.onHandleSubmit}
            className="btn btn-success btn-form"
          >
            submit
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary btn-form"
            onClick={validate}
          >
            next
          </button>
        )}
      </div>
    );
  }
}

export { Footer };
