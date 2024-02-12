import React from "react";

export const Button = (props) => {
  const { children, clr, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`m-2 rounded-md bg-clr-acnt p-2 px-8 shadow-md hover:bg-${clr}  flex items-center justify-center font-semibold active:translate-y-1`}
    >
      {children}
    </button>
  );
};
