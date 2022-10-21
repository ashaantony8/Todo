import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import "./css/main.css";

function App() {
  return (
    <div className="App">
      <h1
        
      >
        Todo App
      </h1>
      <div
       
      >
        <Todos />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;
