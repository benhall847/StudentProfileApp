import {
  SET_STUDENTS,
  SET_SEARCH_INPUT,
  SET_TAG_SEARCH_INPUT,
  SET_STUDENT_TAG,
  DELETE_STUDENT_TAG,
} from "core/constants";

const reducer = (state, action) => {
  const { index, tag, tagIndex } = action.payload;
  // I deconstructed here just to help the readability of code below

  switch (action.type) {
    case SET_STUDENTS:
      return { ...state, students: action.payload };
    case SET_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };
    case SET_TAG_SEARCH_INPUT:
      return { ...state, tagSearchInput: action.payload };
    case DELETE_STUDENT_TAG:
      // I added the option to delete tags when clicked on

      // This filter simply removes the tag with a matching index
      state.students[index].tags = state.students[index].tags.filter(
        (tag, i) => i !== tagIndex
      );
      return { ...state };
    case SET_STUDENT_TAG:
      // I check if tags exist for this particular student
      state.students[index].tags
        ? // If it does exist - i add the tag
          state.students[index].tags.push(tag)
        : // If it doesnt exist yet - I initialize it with the desired value
          (state.students[index].tags = [tag]);
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
