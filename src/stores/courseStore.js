import { EventEmitter } from "events";
import Dispatcher from "../addDispatcher";
import actionTypeDeclared from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeLister(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find((item) => item.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypeDeclared.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;

    case actionTypeDeclared.FETCH_COURSELIST:
      _courses = action.courseList;
      store.emitChange();
      break;

    case actionTypeDeclared.UPDATE_COURSE:
      _courses = _courses.map((item) =>
        item.id === action.course.id ? action.course : item
      );
      store.emitChange();
      break;

    case actionTypeDeclared.DELETE_COURSE:
      _courses = _courses.filter((item) => item.id !== action.courseId);
      store.emitChange();
      break;

    default:
  }
});

export default store;
