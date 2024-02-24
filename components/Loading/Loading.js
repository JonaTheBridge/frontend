import styled from 'styled-components';

const Loading = styled.div`
  height: 100px;

  & > svg {
    width: 100%;
    height: 100%;
  }

  & path {
    fill: var(--primaryColor);
    animation: pulse 5s infinite;
  }

  @keyframes pulse {
    0% { fill: var(--primaryColor) }
    40% { fill: var(--secondaryColor) }
    60% { fill: var(--secondaryColor) }
    100% { fill: var(--primaryColor) }
  }

`;

export default Loading;
