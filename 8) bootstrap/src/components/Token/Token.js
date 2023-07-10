import styled from 'styled-components';

const Token = styled.div`
  height: 80%;
  width: 80%;
  border-radius:${props => props.type === 'square' ? '0px' : '50%'};
  background-color: ${props => props.type === 'square' ? 'red' : 'blue'};
`;

export default Token;
