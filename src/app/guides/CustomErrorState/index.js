import React from "react";
import warningIcon from "./resources/warning.svg";
import {
  errorIconStyle,
  errorTextMessageStyle,
  customErrorContainerStyle,
} from "./style";

const CustomErrorState = () => {
  return (
    <div
      className="custom--error--container"
      style={customErrorContainerStyle()}
    >
      <i className="error--icon" style={errorIconStyle(warningIcon)}></i>
      <p className="error--text" style={errorTextMessageStyle()}>
        error
      </p>
    </div>
  );
};

export { CustomErrorState };
