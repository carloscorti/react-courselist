import React, { useState } from "react";
import CourseForm from "./CourseForm";
import { saveCourse } from "../api/courseApi";

const ManageCoursePage = (props) => {
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

  const submitHandler = (event) => {
    event.preventDefault();
    (async () => {
      await saveCourse(course);
      props.history.push("/courses");
    })();
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm
        course={course}
        inputHandler={inputHandler}
        submitHandler={submitHandler}
      />
      {/* <p>{props.match.params.slug}</p> */}
    </>
  );
};

export default ManageCoursePage;
