import React from "react";

export class Final extends React.Component {
  render() {
    console.log("final");
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
            <span className="text-muted">Sity:</span>
            <span>{value.sity}</span>
          </div>
        </div>
      </div>
    );
  }
}
