import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ReactHookForm } from "./ReactHookForm/ReactHookForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReactHookForm />
    </>
  );
}

export default App;
