import React, { useState } from "react";
import addSvg from "../../assets/img/icon-add.svg";
import axios from "axios";

export default function AddTasksForm({ list, onAddTask }) {
  const [visibleForm, setFormVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const toggleFormVisible = () => {
    setFormVisible(!visibleForm);
    setInputValue("");
  };

  const addTask = () => {
    const obj = {
      listId: list.id,
      text: inputValue,
      completed: false,
    };
    setIsLoading(true);
    axios
      .post("http://localhost:3000/tasks", obj)
      .then(({ data }) => {
        onAddTask(list.id, data);
        toggleFormVisible();
      })
      .catch(() => {
        alert("Ошибка при добавлении задачи");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="tasks__form">
      {!visibleForm ? (
        <div onClick={toggleFormVisible} className="tasks__form-new">
          <img src={addSvg} alt="add icon" />
          <span>Новая задача</span>
        </div>
      ) : (
        <div className="tasks__form-block">
          <input
            value={inputValue}
            className="field"
            type="text"
            placeholder="Текст задачи"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button disabled={isLoading} onClick={addTask} className="button">
            {isLoading ? "Добавление..." : "Добавить задачу"}
          </button>
          <button onClick={toggleFormVisible} className="button button--grey">
            Отмена
          </button>
        </div>
      )}
    </div>
  );
}
