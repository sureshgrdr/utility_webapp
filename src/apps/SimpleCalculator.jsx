import React from "react";

const calcBtn = [
  {
    name: "1",
    value: 1,
  },
  {
    name: "2",
    value: 2,
  },
];

export const SimpleCalculator = () => {
  return (
    <>
      <div className="container row-span-2 grid">
        <div className="appUI">
          <p className="text-4xl font-bold ">🧮 Calculator</p>
          <br />
          <div className="container ">
            <input
              type="text"
              className="  container rounded-xl bg-clr-bkg px-4 py-2 text-xl font-medium text-clr-fnt/80  focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500"
              placeholder="Calculate"
              autoFocus
              autoCorrect="false"
            />
            <br />
            <input
              type="text"
              className="rounded-2xl  bg-transparent text-orange-500 focus:outline-none "
              readOnly
              // hidden
            />
          </div>
        </div>
      </div>
    </>
  );
};
