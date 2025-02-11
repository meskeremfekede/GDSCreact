import React from "react";
import Counter from "./counter";
import Usecard from "./Usecard";

export default function App() {
  return (
    <div>
      <h1>React Components Demo</h1>

      {/* Counter Component */}
      <Counter />

      {/* User Cards */}
      <Usecard name="Meski" age={20} email="yeabsrafekede@example.com" />
      <Usecard name="etsubdink" age={23} email="etsub@gmail.com" />
    </div>
  );
}

