import React from "react";

interface titleProps {
  title: React.ReactNode;
  paragraph: React.ReactNode;
}


const Title = ({title, paragraph,}: titleProps) => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="md:w-8/12 w-10/12 pb-4 inconsolata-extrabold text-3xl text-neutral-50 xl:text-4xl xl:leading-12">
        {title}
      </h1>
      <p className="md:w-7/12 w-6/12 inconsolata-regular text-neutral-300 text-base md:text-lg">
        {paragraph}
      </p>
    </div>
  );
};

export default Title;

