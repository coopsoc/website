import React from "react";

import Loader from "components/Loader";

const LoadingButton = ({ text, onClick, isLoading, disabled }) => {
  return (
    <button
      className="w-100 btn btn-primary btn-lg"
      onClick={onClick}
      disabled={disabled}
    >
      {!isLoading ? (
        text
      ) : (
        <Loader width={13} height={14} strokeColour="white" />
      )}
    </button>
  );
};

export default LoadingButton;
