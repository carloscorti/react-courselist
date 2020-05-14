import React from "react";
import TextInput from "./TextInput";

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
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
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

export default CourseForm;
