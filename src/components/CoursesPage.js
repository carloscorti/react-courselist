import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import { Link } from "react-router-dom";
import CoursesList from "./CourseList";

const CoursesPage = () => {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    (async () => {
      const courses = await getCourses();
      setCoursesList([...courses]);
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
