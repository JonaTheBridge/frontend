import styled from 'styled-components';

const Button = styled.button`
  width: ${props => props.width || '100px'}
  &:hover {
    color: blue;
  }
  background-color: ${props => props.color || 'grey'};
`;

export default Button;
