import distpacher from "../addDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypeDeclared from "./actionTypes";

export const saveCourse = (course) => {
  return (async () => {
    const savedCourse = await courseApi.saveCourse(course);
    distpacher.dispatch({
      actionType: actionTypeDeclared.CREATE_COURSE,
      course: savedCourse,
    });
  })();
};
