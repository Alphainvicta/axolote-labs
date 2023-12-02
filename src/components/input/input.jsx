import React from "react";
import "./input_style.scss";

const Input = ({ input_type, input_icon, input_text, onChange }) => {
  return (
    <div className="input_cont">
      <div className="input_icon">{input_icon}</div>
      <input
        type={input_type}
        name={input_type}
        placeholder={input_text}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
