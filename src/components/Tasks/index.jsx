import React from "react";
import "./tasks.css";
import editSvg from "../../assets/img/edit.svg";

const Tasks = () => {
  return (
    <div className="tasks">
      <h2 className="tasks__title">
        Фронтенд
        <img src={editSvg} alt="edit" />
      </h2>

      <div className="tasks__item">
        <div className="tasks__item-row">
          <div className="checkbox">
            <input id="check" type="checkbox" />
            <label htmlFor="check">
              <svg
                width="13"
                height="10"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                  stroke="#bdb7b7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
          </div>
          {/* <input value="ReactJS Hooks (useState, useReducer, useEffect и т.д.)" /> */}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
