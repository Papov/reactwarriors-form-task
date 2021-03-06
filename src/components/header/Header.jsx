import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export class Header extends React.PureComponent {
  static propTypes = {
    activeStep: PropTypes.number.isRequired,
    steps: PropTypes.array.isRequired
  };

  render() {
    //console.log("header");
    const { steps, activeStep } = this.props;
    return (
      <div className="d-flex justify-content-around align-items-center">
        {steps.map((step, index) => (
          <React.Fragment key={`${step}${index}`}>
            {0 !== index && (
              <span
                className={classNames("step--line", {
                  active: activeStep >= index
                })}
              />
            )}
            <div
              className={classNames(
                "step rounded-circle font-weight-bold text-white",
                { active: activeStep === index, checked: activeStep > index }
              )}
            >
              {index + 1}
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }
}
