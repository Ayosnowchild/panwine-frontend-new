import logo from "./logo.svg";
import "./App.css";
import { ScrollRestoration, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

export default App;
