import React from "react";

function Inputs({ className, placeholder, type, value, onChange ,name}) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        name={name}
        required
      />
    </div>
  );
}

export default Inputs;
