import React from "react";
import InfoIcon from "./InfoIcon"

interface ErrorTextPropTypes {
  errorText: string;
}

const ErrorText = ({ errorText }: ErrorTextPropTypes) => {
  return (
    <div className="flex flex-row items-center">
      <p className="text-orange-500 text-xs md:text-sm pt-1 inconsolata-medium">
        <InfoIcon hasError={true} />
        {errorText}
      </p>
    </div>
  );
};

export default ErrorText;
