import styled from 'styled-components';

const Token = styled.table`
  font-size: 30px;
  border-spacing: 0px;
  border-radius: 10px 10px 0 0;
  & th {
    border: 0;
    background-color: rgb(200, 200, 200);
    border-radius: 10px 10px 0 0;
    padding: 5px 20px;
    cursor: pointer;
    user-select: none;
  }

  & tr:nth-child(even) {
    background-color: rgb(150, 200, 200);
  }
`;

export default Token;
