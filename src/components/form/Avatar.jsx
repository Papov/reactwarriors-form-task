import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";

@inject(({ store }) => ({
  onChangeAvatar: store.onChangeAvatar,
  avatar: store.values.avatar,
  error: store.errors.avatar
}))
@observer
class Avatar extends React.Component {
  static propTypes = {
    avatar: PropTypes.string,
    onChangeAvatar: PropTypes.func.isRequired
  };

  render() {
    //console.log("avatar");
    const { error, avatar, onChangeAvatar } = this.props;
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
              invalid: error
            })}
            htmlFor="file"
          >
            Choose avatar
          </label>
        </div>
        {error && <span className="invalid-feedback m-0">{error}</span>}
      </React.Fragment>
    );
  }
}

export { Avatar };
