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

  const deleteHandler = (event) => {
    (async () => {
      event.preventDefault();
      await courseActions.deleteCourse(event.target.value);
      props.history.push("/courses");
      toast.dark("Course deleted :)¡¡¡¡");
    })();
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        authors={authors}
        inputHandler={inputHandler}
        submitHandler={submitHandler}
        deleteHandler={deleteHandler}
        error={error}
      />
    </>
  );
};

export default ManageCoursePage;
