import React from "react";

function Buttons({ text, onClick,className }) {
  return (
    <div>
      <button onClick={onClick} className={className} >{text}</button>
    </div>
  );
}

export default Buttons;
