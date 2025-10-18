import React from "react";

interface formElementProps {
  title: string;
  htmlFor?: string;
}

const Label = ({ title, htmlFor }: formElementProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-neutral-300 pt-3 text-[1em] tracking-wide text-base inconsolata-medium"
    >
      {title}
    </label>
  );
};

export default Label;
