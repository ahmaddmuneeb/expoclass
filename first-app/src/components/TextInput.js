import React from "react";
import "./components.css";

const TextInput = ({ label, placeholder, type, value, setValue }) => {
  return (
    <div>
      <p className="label">{label}</p>
      <input
        className="text-input"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
