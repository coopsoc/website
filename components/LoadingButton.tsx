import React from "react";

import Loader from "./Loader";

interface LoadingButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  isLoading: boolean;
  disabled?: boolean;
}

const LoadingButton = ({
  text,
  onClick,
  isLoading,
  disabled,
}: LoadingButtonProps) => {
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
