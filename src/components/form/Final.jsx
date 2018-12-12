import React from "react";
import PropTypes from "prop-types";

export class Final extends React.PureComponent {
  static propTypes = {
    value: PropTypes.object.isRequired
  };

  render() {
    // console.log("final");
    const { value } = this.props;
    return (
      <div className="mt-4 mb-4">
        <div className="d-flex align-items-center justify-content-center">
          <img
            className="rounded-circle"
            width="100"
            height="100"
            src={value.avatar}
            alt="avatar"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <h3 className="m-0">{value.firstname} </h3>
          <h3 className="mb-0 ml-2">{value.lastname}</h3>
        </div>
        <div className="mt-2 mb-4">
          <div className="user-info d-flex flex-column align-items-center justify-content-center text-monospace">
            <span className="text-muted">Mail:</span>
            <span>{value.email}</span>
          </div>
          <div className="user-info d-flex flex-column align-items-center justify-content-center text-monospace">
            <span className="text-muted">Phone:</span>
            <span>{value.phone}</span>
          </div>
          <div className="user-info d-flex flex-column align-items-center justify-content-center text-monospace">
            <span className="text-muted">City:</span>
            <span>{value.city}</span>
          </div>
        </div>
      </div>
    );
  }
}
