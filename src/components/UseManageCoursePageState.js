import { useState, useEffect } from "react";
import { getAuthors } from "../api/authorApi";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";

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
    const onChange = () => {
      if (slug) {
        console.log("cargo cursos en la pagina por evento change");
        setCourse({ ...courseStore.getCourseBySlug(slug) });
      }
    };
    (async () => {
      console.log("agrego event listener");

      courseStore.addChangeListener(onChange);

      const auth = await getAuthors();
      setAuthors([...auth]);
      if (courseStore.getCourses().length === 0) {
        console.log("cargo cursos en store llamando a la base de datos");
        await courseActions.loadCourses();
      } else if (slug) {
        const slugCourse = courseStore.getCourseBySlug(slug);
        setCourse({ ...slugCourse });
      }
    })();
    return () => {
      console.log("remove event listener");
      courseStore.removeChangeLister(onChange);
    };
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
