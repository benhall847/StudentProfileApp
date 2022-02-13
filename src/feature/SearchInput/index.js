import styled from "styled-components";

export const StyledInput = styled.input`
  border: 0px;
  font-size: 20px;
  font-weight: lighter;
  border-bottom: solid lightgrey 1px;
  margin: 10px;
  font-family: "Raleway", thin;
  margin-bottom: 0px;
  padding-bottom: 10px;
  :focus {
    outline: none;
    border-bottom: solid grey 1.2px;
  }
`;

const SearchInput = (props) => {
  return <StyledInput {...props} />;
};

export default SearchInput;
