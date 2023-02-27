import React from "react";

function Buttons({ text, onClick, className ,style}) {
  return (
    <div>
      <button
        onClick={onClick}
        style={style}
        className={className}
      >
        {text}
      </button>
    </div>
  );
}

export default Buttons;
