import React from "react";
import TextInput from "./TextInput";
import PropTypes from "prop-types";

const CourseForm = (props) => {
  return (
    <form onSubmit={props.submitHandler}>
      <TextInput
        inputHandler={props.inputHandler}
        name="title"
        val={props.course.title}
        error={props.error.title}
      />
      <div className={`form-group ${props.error.authorId ? "has-error" : ""}`}>
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.inputHandler}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value=""></option>
            {props.authors.map((aut) => (
              <option value={aut.id}>{aut.name}</option>
            ))}
          </select>
        </div>
        {props.error.authorId ? (
          <div className="alert alert-danger">{props.error.authorId}</div>
        ) : (
          ""
        )}
      </div>
      <TextInput
        inputHandler={props.inputHandler}
        name="category"
        val={props.course.category}
        error={props.error.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  inputHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
};

export default CourseForm;
