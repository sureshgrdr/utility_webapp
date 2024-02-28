import React, { useState } from "react";

export const TodoList = () => {
  const [state, setState] = useState([]);

  const handleAddNote = (e) => {
    let note = document.querySelector(".inputNote");
    let newNote =
      note.value.slice(0, 1).toUpperCase() + note.value.slice(1).toLowerCase();
    newNote ? setState([...state, newNote]) : "";
    note.value = "";
  };
  const handleEnter = (e) => {
    e.key === "Enter" && handleAddNote();
  };
  const handleRemove = (id) => {
    setState(state.filter((item, key) => key !== id));
  };
  return (
    <>
      <div className="container row-span-2 grid">
        <div className="appUI ">
          <p className="text-4xl font-bold">🗒️ ToDo List</p>
          <br />

          <div className="container mb-2 flex flex-row flex-wrap items-center justify-center gap-2">
            <input
              type="text"
              className="inputNote rounded-3xl bg-clr-bkg p-2 px-4 text-clr-fnt/80 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500"
              placeholder="take note"
              onKeyDown={(e) => handleEnter(e)}
              spellCheck="false"
            />
            <button className="btn-mini " onClick={handleAddNote}>
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          <button
            className="btn-mini hover:bg-red-500"
            onClick={() => setState([])}
          >
            <span className="material-symbols-outlined">restart_alt</span>
          </button>

          <br />

          <div className="container h-80 overflow-auto rounded-xl bg-clr-bkg p-5">
            <ul className=" list-decimal">
              {state?.map((item, i) => {
                return (
                  <li
                    key={i}
                    className="flex-row-center mb-2 justify-between gap-5 border-b-2 border-b-clr-acnt p-1 "
                  >
                    <div className="flex items-center justify-start gap-4">
                      <input type="checkbox" className="" />
                      <p className="break-all text-clr-fnt">{item}</p>
                    </div>
                    <button
                      className=" text-clr-fnt duration-75 hover:text-red-500"
                      onClick={() => handleRemove(i)}
                    >
                      <span className="material-symbols-outlined spanIcon">
                        close
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
