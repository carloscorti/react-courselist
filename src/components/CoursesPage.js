import React, { useState, useEffect } from "react";
import { getAuthors } from "../api/authorApi";
import { Link } from "react-router-dom";
import CoursesList from "./CourseList";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";
import { toast } from "react-toastify";

const CoursesPage = () => {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    let courses = [];
    const onChange = async () => {
      console.log("cargo cursos en la pagina por evento change");
      courses = [...courseStore.getCourses()];
      const authors = await getAuthors();
      const completeCourses = JSON.parse(JSON.stringify(courses));
      completeCourses.map((course) => {
        authors.forEach((author) => {
          if (author.id === course.authorId) return (course.authorId = author);
        });
        return course;
      });
      setCoursesList([...completeCourses]);
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
        await onChange();
      }
    })();
    return () => {
      console.log("remove event listener");
      courseStore.removeChangeLister(onChange);
    };
  }, []);

  const handleDelete = (event) => {
    (async () => {
      event.preventDefault();
      await courseActions.deleteCourse(event.target.value);
      toast.dark("Course deleted :)¡¡¡¡");
    })();
  };

  return (
    <>
      <h1>Courses</h1>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CoursesList coursesList={coursesList} handleDelete={handleDelete} />
    </>
  );
};

export default CoursesPage;
