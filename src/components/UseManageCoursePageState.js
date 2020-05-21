import { useState, useEffect } from "react";
import { getAuthors } from "../api/authorApi";
import courseStore from "../stores/courseStore";

const useManageCoursePageState = (slug) => {
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState({});
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    (async () => {
      const auth = await getAuthors();
      setAuthors([...auth]);
      if (slug) {
        const slugCourse = courseStore.getCourseBySlug(slug);
        setCourse({ ...slugCourse });
      }
    })();
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
    authors,
    error,
    course,
    inputHandler,
    inputValidation,
  };
};

export default useManageCoursePageState;
