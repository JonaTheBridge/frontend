import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 3rem;
  height: 3rem;
  border: 0;
  background: transparent;
  gap: .65rem;

  & > div {
    background: black;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    transition: all .5s;
    transform-origin: left;
  }

  &.open div:first-child {
    transform: rotate(45deg);
  }

  &.open div:nth-child(2) {
    opacity: 0;
  }

  &.open div:last-child {
    transform: rotate(-45deg);
  }
`;

const Aside = styled.div`
  display: flex;
  width: 20vw;
  height: 90vh;
  background-color: white;
  z-index: 1;
  position: fixed;
  left: 0;
  top: 10vh;
`;

function MobileNavBar(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(!open)} className={ open && 'open' }>
        <div/>
        <div/>
        <div/>
      </Button>
      { open &&
        <Aside>
        </Aside>
      }
    </>
  );
}

export default MobileNavBar;
