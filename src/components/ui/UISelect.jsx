import React from "react";
import classNames from "classnames";

export class UISelect extends React.PureComponent {
  static defaultProps = {
    child: []
  };

  render() {
    const { id, label, value, onChange, error, child } = this.props;
    return (
      <div className="d-flex flex-column mb-2 mt-2">
        <label className="mr-sm-2" htmlFor={id}>
          {label}
        </label>
        <select
          className={classNames("form-control custom-select mr-sm-2", {
            invalid: error
          })}
          id={id}
          value={value}
          onChange={onChange}
        >
          {["", ...child].map(item => (
            <option key={`${label}${item}`} value={item}>
              {item || "No checked"}
            </option>
          ))}
        </select>
        {error && <span className="invalid-feedback m-0">{error}</span>}
      </div>
    );
  }
}
