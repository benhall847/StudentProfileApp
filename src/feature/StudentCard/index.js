import styled from "styled-components";
import { useState, useContext } from "react";
import TestResult from "./TestResult";
import Tag from "feature/Tag";
import UserInput from "feature/UserInput";
import { GlobalContext } from "core/Provider";
import { SET_STUDENT_TAG, DELETE_STUDENT_TAG } from "core/constants";

const CardBody = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: row;
  border-bottom: solid lightgrey 1px;
  align-items: center;
`;
const InfoWrapper = styled.div`
  padding: 10px;
  margin-left: 15px;
`;
const StyledImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: solid lightgrey 1px;
  margin: 10px;
  margin-bottom: auto;
`;
const StyledName = styled.h1`
  margin: 0px;
`;

const StyledLabel = styled.label`
  margin-left: auto;
  margin-bottom: auto;
  margin-right: 10px;
  color: grey;
  font-size: 65px;
  font-weight: 500;
  :hover {
    color: #555;
  }
  ::after {
    content: "+";
  }
`;

const StyledInput = styled.input`
  :checked + label::after {
    content: "-";
  }
  display: none;
`;

const StyledContent = styled.div`
  padding-top: 20px;
  display: ${({ viewContent }) => (viewContent ? "block" : "none")};
`;

const StyledTags = styled.div``;

const StudentCard = ({
  city,
  company,
  email,
  firstName,
  grades,
  lastName,
  pic,
  skill,
  id,
  tags,
  index,
}) => {
  let total = 0;
  grades.forEach((grade) => (total += parseInt(grade)));
  const average = total / grades.length;

  const [viewContent, setViewContent] = useState(false);
  const [userInput, setUserInput] = useState("");
  const { dispatch } = useContext(GlobalContext);

  return (
    <CardBody>
      <StyledImage src={pic} />
      <InfoWrapper>
        <StyledName>
          {firstName.toUpperCase() + " " + lastName.toUpperCase()}
        </StyledName>
        <InfoWrapper>
          <div>Email: {email}</div>
          <div>Company: {company}</div>
          <div>Skill: {skill}</div>
          <div>Average: {average}% </div>
          <StyledContent viewContent={viewContent}>
            {grades &&
              grades.map((result, id) => (
                <TestResult result={result} key={id} />
              ))}
          </StyledContent>
          <StyledTags>
            {tags &&
              tags.map((tag, i) => (
                <Tag
                  key={i}
                  tag={tag}
                  onClick={() => {
                    dispatch(DELETE_STUDENT_TAG, { index, tagIndex: i });
                  }}
                />
              ))}
          </StyledTags>
          <UserInput
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                dispatch(SET_STUDENT_TAG, { index, tag: userInput });
                setUserInput("");
              }
            }}
            placeholder="Add a tag"
          />
        </InfoWrapper>
      </InfoWrapper>
      <StyledInput
        type="checkbox"
        id={`list${id}`}
        onClick={() => setViewContent(!viewContent)}
      />
      <StyledLabel htmlFor={`list${id}`} />
    </CardBody>
  );
};

export default StudentCard;
