import React, {useState} from "react";
// components
import Message from './pages/Message'
// styling
import "./App.scss";

const App = () => {
  const [theme] = useState("dark")
  return (
    <div class={theme === "dark" ? "App dark-theme" : "App light-theme"}>
      <Message />
    </div>
  );
};

export default App;
