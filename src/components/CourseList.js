import React from "react";
import PropTypes from "prop-types";

const CoursesList = (props) => {
  return (
    <>
      <h1>Courses</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author Id</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {props.coursesList.map((course) => (
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

CoursesList.propTypes = {
  coursesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

CoursesList.defaultProps = {
  coursesList: [
    {
      id: 0.0,
      title: "error defoult data",
      slug: "error defoult data",
      authorId: 0.0,
      category: "error defoult data",
    },
  ],
};

export default CoursesList;
