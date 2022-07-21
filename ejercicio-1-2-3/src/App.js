import logo from "./logo.svg";
import "./App.css";
import ContactoList from "./components/container/ContactoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoList />
      </header>
    </div>
  );
}

export default App;
