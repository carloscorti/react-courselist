import distpacher from "../addDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypeDeclared from "./actionTypes";

export const saveCourse = (course) => {
  return (async () => {
    const savedCourse = await courseApi.saveCourse(course);
    distpacher.dispatch({
      actionType: course.id
        ? actionTypeDeclared.UPDATE_COURSE
        : actionTypeDeclared.CREATE_COURSE,
      course: savedCourse,
    });
  })();
};

export const loadCourses = () => {
  return (async () => {
    const courseList = await courseApi.getCourses();
    distpacher.dispatch({
      actionType: actionTypeDeclared.FETCH_COURSELIST,
      courseList,
    });
  })();
};
