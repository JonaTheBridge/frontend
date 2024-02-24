import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  width: 200px;
  height: 100px;
  position: fixed;
  top: 10px;
  right: 10px;
  border-radius: 10px;
  font-size: 15px;
  color: transparent;

  & > .clipboard {
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  &.fadeOut {
    animation-name: fadeOut;
    animation-duration: ${props => props.$duration}s;
  }

  &.freezeError {
    animation: none;
    background-color: rgba(200, 0, 0, 1);
    color: rgba(0, 0, 0, 1);
  }

  @keyframes fadeOut {
    0% {
      background-color: rgba(200, 0, 0, 1);
      color: rgba(0, 0, 0, 1);
    }

    80% {
      background-color: rgba(200, 0, 0, 1);
      color: rgba(0, 0, 0, 1);
    }

    100% {
      background-color: rgba(200, 0, 0, 0);
      color: rgba(0, 0, 0, 0);
    }
  }
`;

function Error(props) {
  const { message, seconds } = props;
  const duration = seconds && !isNaN(parseInt(seconds)) ? parseInt(seconds) : 5;

  const [error, setError] = useState(message);
  const [showError, setShowError] = useState(true);
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [classError, setClassError] = useState('');

  const timeoutId = useRef();

  function fadeOutError() {
    setClassError('fadeOut');
    timeoutId.current = setTimeout(() => {
      setShowError(false);
    }, duration * 1000);
  }

  useEffect(fadeOutError, []);

  useEffect(() => {
    !mouseIsOver && fadeOutError();
  }, [mouseIsOver]);

  function onClickHandler() {
    navigator.clipboard.writeText(message);
    setError('Error copiado al portapapeles');
  }

  function onMouseOverHandler() {
    setClassError('freezeError');
    clearTimeout(timeoutId.current);
    setMouseIsOver(true);
    setShowError(true);
  }

  function onMouseOutHandler() {
    setClassError('fadeOut');
    setShowError(true);
    setMouseIsOver(false);
  }

  return (
    <>
      { (showError || mouseIsOver) &&
        <StyledError
          onMouseOver={onMouseOverHandler}
          onMouseOut={onMouseOutHandler}
          $duration={ duration }
          className={ classError }
        >
          { error }
          <div className='clipboard'
            onClick={ onClickHandler }
          >
            📋
          </div>
        </StyledError>
      }
    </>
  );
}

export default Error;
