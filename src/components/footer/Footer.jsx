import React from "react";
import PropTypes from "prop-types";

export class Footer extends React.PureComponent {
  static propTypes = {
    changeActiveStep: PropTypes.func.isRequired,
    activeStep: PropTypes.number.isRequired,
    validate: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
  };

  onHandleSubmit = event => {
    event.preventDefault();
  };

  render() {
    // console.log("footer");
    const { validate, activeStep, changeActiveStep, length } = this.props;
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
        {length - 1 === activeStep ? (
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
