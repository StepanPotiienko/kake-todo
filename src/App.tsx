import Form from "./components/Form";
import TaskList from "./components/TaskList";

import "./App.css";
import { useState } from "react";

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState("");

  return (
    <div
      className="App p-0.5"
      id="app"
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <div id="tasks">
        <TaskList />
      </div>
      <div id="form-container" className="flex w-full justify-center">
        <Form></Form>
        <button
          onClick={() => {
            setBackgroundImage(
              `url("https://cdn.pixabay.com/photo/2019/02/13/10/26/swedish-flag-3994042_1280.jpg")`
            );
          }}
        >
          Set Background Image
        </button>
      </div>
    </div>
  );
};

export default App;
