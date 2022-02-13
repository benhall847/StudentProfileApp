import styled from "styled-components";
import { StyledInput } from "feature/SearchInput";

// imported the styles from SearchInput to mitigate writing the same style twice.
const StyledUser = styled(StyledInput)`
  width: 150px;
`;
// Reusable component for future features
const UserInput = (props) => {
  return <StyledUser {...props} />;
};

export default UserInput;
