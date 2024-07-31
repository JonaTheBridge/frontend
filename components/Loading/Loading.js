import styled from 'styled-components'

const Loading = styled.div`
  height: 100px;

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes pulse${ props => props.$id } {
    0% { fill: ${ props => props.$primaryColor || 'var(--primaryColor)' } }
    40% { fill: ${ props => props.$secondaryColor || 'var(--secondaryColor)' } }
    60% { fill: ${ props => props.$secondaryColor || 'var(--secondaryColor)' } }
    100% { fill: ${ props => props.$primaryColor || 'var(--primaryColor)' } }
  }

  ${ props => props.$rotation && 'animation: rotate 3s infinite linear' };

  & > svg {
    width: 100%;
    height: 100%;
  }

  & path {
    fill: ${ props => props.$primaryColor || 'var(--primaryColor)' };
    ${ props => props.$pulse && `animation: pulse${ props.$id } 3s infinite linear` };
  }
`

export default Loading
