import React from "react";
import CourseForm from "./CourseForm";
// import { saveCourse } from "../api/courseApi";
import * as courseActions from "../actions/courseActions";
import { toast } from "react-toastify";
import useManageCoursePageState from "./UseManageCoursePageState";

const ManageCoursePage = (props) => {
  const {
    authors,
    error,
    course,
    inputHandler,
    inputValidation,
  } = useManageCoursePageState(props.match.params.slug);

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputValidation(course)) {
      (async () => {
        await courseActions.saveCourse(course);
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
        authors={authors}
        inputHandler={inputHandler}
        submitHandler={submitHandler}
        error={error}
      />
    </>
  );
};

export default ManageCoursePage;
