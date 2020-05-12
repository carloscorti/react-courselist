import React, { useState } from "react";
import CourseForm from "./CourseForm";

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

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} inputHandler={inputHandler} />
      <p>{props.match.params.slug}</p>
    </>
  );
};

export default ManageCoursePage;
