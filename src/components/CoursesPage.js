import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import { getAuthors } from "../api/authorApi";
import { Link } from "react-router-dom";
import CoursesList from "./CourseList";

const CoursesPage = () => {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    (async () => {
      const courses = await getCourses();
      const authors = await getAuthors();
      const completeCourses = courses.map((course) => {
        authors.forEach((author) => {
          if (author.id === course.authorId) return (course.authorId = author);
        });
        return course;
      });
      setCoursesList([...completeCourses]);
    })();
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
