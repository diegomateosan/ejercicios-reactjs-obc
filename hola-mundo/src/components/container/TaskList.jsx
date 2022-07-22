import React from "react";
import { LEVELS } from "../../models/Levels.enum";
import { Task } from "../../models/Task.class";
import TaskComponent from "../pure/Task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Ejemplo",
    "Descripcion por defecto",
    false,
    LEVELS.NORMAL
  );

  const changeState = (id) => {
    console.log("TODO: CAMBIAR ESTADO DE UNA TAREA");
  };

  return (
    <div>
      <h1>Tus tareas:</h1>
      {/* TODO: Aplicar un FOr/MAP para renderizar una lista */}
      <TaskComponent task={defaultTask} />
    </div>
  );
};

export default TaskListComponent;
