import styled from "styled-components";

const StyledResult = styled.div``;

const TestResult = ({ result }) => {
  return <StyledResult>{`Test:    ${result}`}</StyledResult>;
};

export default TestResult;
