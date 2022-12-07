export const messageTextStyle = (linkPreviewData) => {
  let prop = linkPreviewData && linkPreviewData?.links[0] ? "none" : "block";

  return {
    display: prop,
    color: "rgb(20,20,20)",
    padding: "8px",
    background: "transparent",
  };
};

export const linkPreviewStyle = (linkPreviewData) => {
  let prop = linkPreviewData && linkPreviewData?.links[0] ? "block" : "none";

  return {
    display: prop,
  };
};

export const paymentContainerStyle = () => {
  return {
    padding: "8px",
    background: "transparent",
  };
};
