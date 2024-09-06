import AddTodo from "./components/AddToDo";
import AppName from "./components/AppName";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="item-container">
        <TodoItem1 />
      <TodoItem2 />
      </div>

      
    </center>
  );
}

export default App;
