import SearchCard from "feature/SearchCard";
import styled from "styled-components";

const StyledApp = styled.div`
  background: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <SearchCard />
    </StyledApp>
  );
}

export default App;
