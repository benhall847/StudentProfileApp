import {
  SET_STUDENTS,
  SET_SEARCH_INPUT,
  SET_TAG_SEARCH_INPUT,
  SET_STUDENT_TAG,
  DELETE_STUDENT_TAG,
} from "core/constants";

const reducer = (state, action) => {
  const { index, tag, tagIndex } = action.payload;

  switch (action.type) {
    case SET_STUDENTS:
      return { ...state, students: action.payload };
    case SET_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };
    case SET_TAG_SEARCH_INPUT:
      return { ...state, tagSearchInput: action.payload };
    case DELETE_STUDENT_TAG:
      state.students[index].tags = state.students[index].tags.filter(
        (tag, i) => i !== tagIndex
      );
      return { ...state };
    case SET_STUDENT_TAG:
      state.students[index].tags
        ? state.students[index].tags.push(tag)
        : (state.students[index].tags = [tag]);
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
