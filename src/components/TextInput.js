import React from "react";
import PropTypes from "prop-types";

const TextInput = (props) => {
  const errorClass = props.error.length > 0 ? "has-error" : "";
  const lowerName = props.name.toLowerCase();

  return (
    <div className={`form-group ${errorClass}`}>
      <label htmlFor={lowerName}>
        {`${props.name.charAt(0).toUpperCase()}${props.name
          .slice(1)
          .toLowerCase()}`}
      </label>
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
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  val: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  val: "no val pased, recomend pass some React state props",
  error: "",
};

export default TextInput;
