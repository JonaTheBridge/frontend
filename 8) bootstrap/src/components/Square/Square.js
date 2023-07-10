import styled from 'styled-components';

const Square = styled.div`
  height: 80%;
  width: 80%;
  background-color: ${props => props.color || 'red'};
`;

export default Square;
