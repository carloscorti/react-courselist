import React from "react";
import TextInput from "./TextInput";

const CourseForm = (props) => {
  return (
    <form>
      <TextInput
        inputHandler={props.inputHandler}
        name="title"
        val={props.course.title}
      />
      <div className="form-group">
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
      </div>
      <TextInput
        inputHandler={props.inputHandler}
        name="category"
        val={props.course.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

export default CourseForm;
