import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export class UISelect extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    child: PropTypes.array.isRequired
  };

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
          name={id}
          value={value}
          onChange={onChange}
        >
          <option value="">No checked</option>
          {child.map(item => (
            <option key={`${label}${item.value}`} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        {error && <span className="invalid-feedback m-0">{error}</span>}
      </div>
    );
  }
}
