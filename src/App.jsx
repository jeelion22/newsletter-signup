import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import SignupForm from "./SignupForm";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignupForm />
    </>
  );
}

export default App;
