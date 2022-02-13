import styled from "styled-components";

const StyledResult = styled.div``;

// I made this its own component incase TestResult grew to be more complicated.
const TestResult = ({ result }) => {
  return <StyledResult>Test:&ensp;&ensp;&ensp;{result}%</StyledResult>;
};

export default TestResult;
