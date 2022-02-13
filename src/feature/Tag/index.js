import styled from "styled-components";

const StyledTag = styled.button`
  border: 0px;
  height: 30px;
  width: 40px;
  background: lightgrey;
  border-radius: 4px;
  margin-top: 10px;
  margin-right: 4px;
`;

const Tag = ({ tag, onClick }) => {
  return <StyledTag onClick={onClick}>{tag}</StyledTag>;
};

export default Tag;
