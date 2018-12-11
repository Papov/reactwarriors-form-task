import React from "react";
import classNames from "classnames";

export class UIInput extends React.PureComponent {
  render() {
    const { id, label, value, onChange, error, type } = this.props;
    return (
      <div className="d-flex flex-column mb-2 mt-2">
        <label className="mb-0" htmlFor={id}>
          {label}
        </label>
        <input
          className={classNames("form-control", { invalid: error })}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
        />
        {error && <span className="invalid-feedback m-0">{error}</span>}
      </div>
    );
  }
}
