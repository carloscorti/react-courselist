import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CoursesList from "./CourseList";

const CoursesPage = () => {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    (async () => {
      const courses = await getCourses();
      setCoursesList([...coursesList, ...courses]);
    })();
  }, []);

  return (
    <>
      <h1>Courses</h1>
      <CoursesList coursesList={coursesList} />
    </>
  );
};

export default CoursesPage;
