import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { saveCourse } from "../api/courseApi";
import { toast } from "react-toastify";
import { getCourseBySlug } from "../api/courseApi";

const ManageCoursePage = (props) => {
  const [error, setError] = useState({});
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    if (props.match.params.slug) {
      (async () => {
        const slugCourse = await getCourseBySlug(props.match.params.slug);
        setCourse({ ...slugCourse });
      })();
    }
  }, [props.match.params.slug]);

  const inputHandler = (event) => {
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const inputValidation = (courseState) => {
    const validationError = {};

    if (!courseState.title) validationError.title = "Title is required";
    if (!courseState.authorId) validationError.authorId = "Author is required";
    if (!courseState.category)
      validationError.category = "Category is required";

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
