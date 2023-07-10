import styled from 'styled-components';

const Circle = styled.div`
  height: 80%;
  width: 80%;
  border-radius: 50%;
  background-color: ${props => props.color || 'blue'};
`;

export default Circle;
