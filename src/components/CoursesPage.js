import React, { useState, useEffect } from "react";
// import { getCourses } from "../api/courseApi";
import { getAuthors } from "../api/authorApi";
import { Link } from "react-router-dom";
import CoursesList from "./CourseList";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";

const CoursesPage = () => {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    let courses = [];
    const onChange = () => {
      console.log("cargo cursos en la pagina por evento change");
      courses = [...courseStore.getCourses()];
    };
    (async () => {
      console.log("agrego event listener");

      courseStore.addChangeListener(onChange);

      if (courseStore.getCourses().length === 0) {
        console.log("cargo cursos en store llamando a la base de datos");
        await courseActions.loadCourses();
      } else {
        console.log(
          "cargo cursos en la pagina desde store sin llamar otra vez a la base de datos"
        );
        courses = [...courseStore.getCourses()];
      }
      const authors = await getAuthors();
      const completeCourses = courses.map((course) => {
        authors.forEach((author) => {
          if (author.id === course.authorId) return (course.authorId = author);
        });
        return course;
      });
      setCoursesList([...completeCourses]);
    })();
    return () => {
      console.log("remove event listener");
      courseStore.removeChangeLister(onChange);
    };
  }, []);

  return (
    <>
      <h1>Courses</h1>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CoursesList coursesList={coursesList} />
    </>
  );
};

export default CoursesPage;
