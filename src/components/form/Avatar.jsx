import React from "react";

export class Avatar extends React.Component {
  render() {
    const { avatar, onChangeInput } = this.props;
    return (
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="file"
          value={avatar}
          onChange={onChangeInput}
        />
        <label className="custom-file-label" htmlFor="file">
          Choose avatar
        </label>
      </div>
    );
  }
}
