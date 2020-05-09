import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

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
      <p></p>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author Id</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {coursesList.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CoursesPage;
