import React from "react";
import emptyIcon from "./resources/empty.svg";
import {
  emptyIconStyle,
  emptyTextMessageStyle,
  customEmptyContainerStyle,
} from "./style";

const CustomEmptyState = () => {
  return (
    <div
      className="custom--empty--container"
      style={customEmptyContainerStyle()}
    >
      <i className="empty--icon" style={emptyIconStyle(emptyIcon)}></i>
      <p className="empty--text" style={emptyTextMessageStyle()}>
        no chat's found
      </p>
    </div>
  );
};

export { CustomEmptyState };
