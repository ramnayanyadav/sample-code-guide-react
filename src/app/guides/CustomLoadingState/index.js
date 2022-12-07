import React from "react";
import spinnerIcon from "./resources/spinner.svg";
import {
  loadingIconStyle,
  loadingTextMessageStyle,
  customLoadingContainerStyle,
} from "./style";

const CustomLoadingState = () => {
  return (
    <div
      className="custom--loading--container"
      style={customLoadingContainerStyle()}
    >
      <i className="loading--icon" style={loadingIconStyle(spinnerIcon)}></i>
      <p className="loading--text" style={loadingTextMessageStyle()}>
        loading...
      </p>
    </div>
  );
};

export { CustomLoadingState };
