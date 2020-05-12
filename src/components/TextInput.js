import React from "react";

const TextInput = (props) => {
  const lowerName = props.name.toLowerCase();
  return (
    <div className="form-group">
      <label htmlFor={lowerName}>{`${props.name
        .charAt(0)
        .toUpperCase()}${props.name.slice(1).toLowerCase()}`}</label>
      <div className="field">
        <input
          id={lowerName}
          type="text"
          name={lowerName}
          className="form-control"
          onChange={props.inputHandler}
          value={props.val}
        />
      </div>
    </div>
  );
};

export default TextInput;
