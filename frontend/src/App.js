//import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./components/Employee";
import CreateEmployee from "./components/CreateEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employee />}></Route>
          <Route path="/Create" element={<CreateEmployee />}></Route>
          <Route
            path="/update/employee/:id"
            element={<UpdateEmployee />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
