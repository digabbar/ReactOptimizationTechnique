import React, { useState, useCallback } from "react";
import Button from "./Components/UI/Button/Button";
import "./App.css";
import Demo from "./Components/Demo/Demo";

function App() {
  console.log("in app.js");
  const [allowToggle, setAllowToggle] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prev) => {
        return !prev;
      });
    }
  }, [allowToggle]);
  const allowToggleHandler = useCallback(() => {
    setAllowToggle((prevState) => {
      return !prevState;
    });
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
    </div>
  );
}

export default App;
