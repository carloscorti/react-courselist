import { useState, useEffect } from "react";
import { getCourseBySlug } from "../api/courseApi";

const useManageCoursePageState = (slug) => {
  const [error, setError] = useState({});
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    if (slug) {
      (async () => {
        const slugCourse = await getCourseBySlug(slug);
        setCourse({ ...slugCourse });
      })();
    }
  }, [slug]);

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

  return {
    error,
    course,
    inputHandler,
    inputValidation,
  };
};

export default useManageCoursePageState;
