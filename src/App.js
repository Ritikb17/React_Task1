import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import "./App.css";

const initialTasks = [
  { id: "task1", content: "Task 1" },
  { id: "task2", content: "Task 2" },
  { id: "task3", content: "Task 3" },
  { id: "task4", content: "Task 4" },
  { id: "task5", content: "Task 5" },
  { id: "task6", content: "Task 6" },
  { id: "task7", content: "Task 7" },
];
const name = ["Today", "Tomorrow", "This week", "Next Week"];
function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [div2Tasks, setDiv2Tasks] = useState([]);
  const [div3Tasks, setDiv3Tasks] = useState([]);
  const [div4Tasks, setDiv4Tasks] = useState([]);
  const [div5Tasks, setDiv5Tasks] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const draggableId = result.draggableId;

    if (source.droppableId === destination.droppableId) {
      if (destination.droppableId === "div1") {
        const newTasks = Array.from(tasks);
        const [removed] = newTasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, removed);
        setTasks(newTasks);
      } else if (destination.droppableId === "div2") {
        const newDiv2Tasks = Array.from(div2Tasks);
        const [removed] = newDiv2Tasks.splice(source.index, 1);
        newDiv2Tasks.splice(destination.index, 0, removed);
        setDiv2Tasks(newDiv2Tasks);
      } else if (destination.droppableId === "div3") {
        const newDiv3Tasks = Array.from(div3Tasks);
        const [removed] = newDiv3Tasks.splice(source.index, 1);
        newDiv3Tasks.splice(destination.index, 0, removed);
        setDiv3Tasks(newDiv3Tasks);
      } else if (destination.droppableId === "div4") {
        const newDiv4Tasks = Array.from(div4Tasks);
        const [removed] = newDiv4Tasks.splice(source.index, 1);
        newDiv4Tasks.splice(destination.index, 0, removed);
        setDiv4Tasks(newDiv4Tasks);
      } else if (destination.droppableId === "div5") {
        const newDiv5Tasks = Array.from(div5Tasks);
        const [removed] = newDiv5Tasks.splice(source.index, 1);
        newDiv5Tasks.splice(destination.index, 0, removed);
        setDiv5Tasks(newDiv5Tasks);
      }
    } else {
      if (destination.droppableId === "div1") {
        const newTasks = Array.from(tasks);
        const newDiv2Tasks = Array.from(div2Tasks);
        const [removed] = newDiv2Tasks.splice(source.index, 1);
        newTasks.splice(destination.index, 0, removed);
        setTasks(newTasks);
        setDiv2Tasks(newDiv2Tasks);
      } else if (destination.droppableId === "div2") {
        const newDiv2Tasks = Array.from(div2Tasks);
        const [removed] = tasks.splice(source.index, 1);
        newDiv2Tasks.splice(destination.index, 0, removed);
        setTasks(tasks);
        setDiv2Tasks(newDiv2Tasks);
      } else if (destination.droppableId === "div3") {
        const newDiv3Tasks = Array.from(div3Tasks);
        const [removed] = tasks.splice(source.index, 1);
        newDiv3Tasks.splice(destination.index, 0, removed);
        setTasks(tasks);
        setDiv3Tasks(newDiv3Tasks);
      } else if (destination.droppableId === "div4") {
        const newDiv4Tasks = Array.from(div4Tasks);
        const [removed] = tasks.splice(source.index, 1);
        newDiv4Tasks.splice(destination.index, 0, removed);
        setTasks(tasks);
        setDiv4Tasks(newDiv4Tasks);
      } else if (destination.droppableId === "div5") {
        const newDiv5Tasks = Array.from(div5Tasks);
        const [removed] = tasks.splice(source.index, 1);
        newDiv5Tasks.splice(destination.index, 0, removed);
        setTasks(tasks);
        setDiv5Tasks(newDiv5Tasks);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container">
        <div className="div">
          <h2>Unplanned</h2>
          <Droppable droppableId="div1">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        className="task"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        {[...Array(4)].map((_, i) => (
          <div className="div" key={`div${i + 2}`}>
            <h2>{name[i]}</h2>
            Drag task here
            <Droppable droppableId={`div${i + 2}`}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {i === 0 &&
                    div2Tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="task"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {task.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                  <br></br>
                  {i === 1 &&
                    div3Tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="task"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {task.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {i === 2 &&
                    div4Tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="task"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {task.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {i === 3 &&
                    div5Tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            className="task"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {task.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}

export default App;
