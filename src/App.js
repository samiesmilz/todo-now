import logo from "./todoNow.png";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Weclome To TodoNow.</p>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
