import GlobalContext from "core/GlobalContext";
import { useContext, useEffect } from "react";
import {
  SET_STUDENTS,
  SET_SEARCH_INPUT,
  SET_TAG_SEARCH_INPUT,
} from "core/constants";
import styled from "styled-components";
import StudentCard from "feature/StudentCard";
import SearchInput from "feature/SearchInput";

const CardBody = styled.div`
  background: white;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 500px;
  display: flex;
  flex-direction: column;
  width: 700px;
  overflow: hidden;
`;

const Results = styled.div`
  scrollbar-width: thin;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const SearchCard = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { students, searchInput, tagSearchInput } = state;

  // GET API call for student data
  useEffect(() => {
    const fetchStudents = async () => {
      const data = await fetch("https://api.hatchways.io/assessment/students");
      const json = await data.json();
      dispatch(SET_STUDENTS, json.students);
    };
    fetchStudents();
  }, []);

  // Filter by name & tag
  const filteredStudents = students.filter(
    ({ firstName, lastName, tags }, i) => {
      const fullName = (firstName + " " + lastName).toLowerCase();
      // I also track the index to allow removing of tags
      students[i].index = i;
      // Filter by tag
      const includesTag = tagSearchInput
        ? tags &&
          tags.filter((tag) =>
            tag.toLowerCase().includes(tagSearchInput.toLowerCase())
          ).length > 0
        : true;
      // Filter by name & return result
      return fullName.includes(searchInput.toLowerCase()) && includesTag;
    }
  );

  return (
    <CardBody>
      <SearchInput
        value={state.SearchInput}
        onChange={(e) => {
          dispatch(SET_SEARCH_INPUT, e.target.value);
        }}
        placeholder="Search by name"
      />
      <SearchInput
        value={state.tagSearchInput}
        onChange={(e) => {
          dispatch(SET_TAG_SEARCH_INPUT, e.target.value);
        }}
        placeholder="Search by tag"
      />
      <Results>
        {filteredStudents &&
          filteredStudents.map((eaStudent) => (
            <StudentCard
              {...eaStudent}
              key={eaStudent.id}
              index={eaStudent.index}
            />
          ))}
      </Results>
    </CardBody>
  );
};

export default SearchCard;
