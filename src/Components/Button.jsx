import React from "react";

export const Button = (props) => {
  const { btnName, clr, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`m-2 rounded-md bg-clr-acnt p-2 px-8 shadow-md hover:bg-${clr}  active:translate-y-1 `}
    >
      {btnName}
    </button>
  );
};
