import styled from "styled-components";
import { StyledInput } from "feature/SearchInput";

const StyledUser = styled(StyledInput)`
  width: 150px;
`;

const UserInput = (props) => {
  return <StyledUser {...props} />;
};

export default UserInput;
