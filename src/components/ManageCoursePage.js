import React, { useState } from "react";
import CourseForm from "./CourseForm";
import { saveCourse } from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [error, setError] = useState({});
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  const inputHandler = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const inputValidation = (course) => {
    const validationError = {};

    if (!course.title) validationError.title = "Title is required";
    if (!course.authorId) validationError.authorId = "Author is required";
    if (!course.category) validationError.category = "Category is required";

    setError({ ...validationError });

    return Object.keys(validationError).length === 0;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputValidation(course)) {
      (async () => {
        await saveCourse(course);
        props.history.push("/courses");
        toast.success("Course saved :)¡¡¡¡");
      })();
    }
    return;
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        inputHandler={inputHandler}
        submitHandler={submitHandler}
        error={error}
      />
    </>
  );
};

export default ManageCoursePage;
