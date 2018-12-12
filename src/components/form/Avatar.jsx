import React from "react";
import classNames from "classnames";

export class Avatar extends React.PureComponent {
  render() {
    //console.log("avatar");
    const { errors, avatar, onChangeAvatar } = this.props;
    return (
      <React.Fragment>
        <div className="photo-preview mt-3">
          <img
            src={avatar || "http://hawcepbep.ru/files/avatars/1517653037.jpg"}
            alt="avatar"
          />
        </div>
        <div className="custom-file mt-3">
          <input
            type="file"
            className="custom-file-input"
            id="file"
            onChange={onChangeAvatar}
          />
          <label
            className={classNames("custom-file-label", {
              invalid: errors.avatar
            })}
            htmlFor="file"
          >
            Choose avatar
          </label>
        </div>
        {errors.avatar && (
          <span className="invalid-feedback m-0">{errors.avatar}</span>
        )}
      </React.Fragment>
    );
  }
}
