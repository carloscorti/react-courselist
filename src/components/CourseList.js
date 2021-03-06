import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CoursesList = (props) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author Id</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.coursesList.map((course) => (
            <tr key={course.id}>
              <td>
                <Link to={`/course/${course.slug}`}>{course.title}</Link>
              </td>
              <td>{course.authorId.name}</td>
              <td>{course.category}</td>
              <td>
                <button
                  value={course.id}
                  onClick={props.handleDelete}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </td>
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
      authorId: PropTypes.object.isRequired,
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
      authorId: {},
      category: "error defoult data",
    },
  ],
};

export default CoursesList;
