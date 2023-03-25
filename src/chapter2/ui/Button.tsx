import React from "react";
import { useState } from "react";
export const Button = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);
  return (
    <button onClick={() => setIsToggleOn(!isToggleOn)}>
      {isToggleOn ? "ON" : "OFF"}{" "}
    </button>
  );
};
