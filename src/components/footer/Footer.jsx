import React from "react";

export class Footer extends React.PureComponent {
  onHandleSubmit = event => {
    event.preventDefault();
  };

  render() {
    //console.log("footer");
    const { validate, activeStep, changeActiveStep, length } = this.props;
    return (
      <div className="btn-group btn-group-sm mt-2" role="group">
        <button
          type="button"
          className="btn btn-secondary btn-form"
          disabled={activeStep === 0}
          onClick={changeActiveStep(-1)}
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
