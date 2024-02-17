import React from "react";

export const AppMenu = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 grid h-auto w-full grid-flow-col place-content-center gap-20 bg-clr-acnt py-10">
        <div className="flex-col-center ">
          <span className="material-symbols-outlined m-2 rounded-lg bg-clr-bkg p-3 text-3xl text-clr-fnt ">
            timer
          </span>
          <span className="text-md font-medium text-clr-fnt">Timer</span>
        </div>
        <div className="flex-col-center">
          <span className="material-symbols-outlined m-2 rounded-lg bg-clr-bkg p-3 text-3xl text-clr-fnt">
            <span className="material-symbols-outlined">description </span>
          </span>
          <span className="text-md font-medium text-clr-fnt">Timer</span>
        </div>
        <div className="flex-col-center">
          <span className="material-symbols-outlined m-2 rounded-lg bg-clr-bkg p-3 text-3xl text-clr-fnt">
            timer
          </span>
          <span className="text-md font-medium text-clr-fnt">Timer</span>
        </div>
        <div className="flex-col-center">
          <span className="material-symbols-outlined m-2 rounded-lg bg-clr-bkg p-3 text-3xl text-clr-fnt">
            timer
          </span>
          <span className="text-md font-medium text-clr-fnt">Timer</span>
        </div>
      </div>
    </>
  );
};
