import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = { courses: [] };

  componentDidMount() {
    (async () => {
      const courses = await getCourses();
      this.setState({ courses: [...this.state.courses, ...courses] });
    })();
  }

  render() {
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
            {this.state.courses.map((course) => (
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
  }
}

export default CoursesPage;
