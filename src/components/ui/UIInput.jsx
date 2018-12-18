import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export class UIInput extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

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
          name={id}
          value={value}
          onChange={onChange}
        />
        {error && <span className="invalid-feedback m-0">{error}</span>}
      </div>
    );
  }
}
