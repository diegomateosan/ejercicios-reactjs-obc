import logo from "./logo.svg";
import "./App.css";
import GreetingC from "./components/pure/GreetingC";
import GreetingF from "./components/pure/GreetingF";
import TaskListComponent from "./components/container/TaskList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componenete propio Greeting.jsx */}
        {/* <GreetingC name={"Diego"} /> */}
        {/* <GreetingF name={"Diego"} /> */}
        <TaskListComponent />
      </header>
    </div>
  );
}

export default App;
