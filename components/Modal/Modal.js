import styled from 'styled-components';

const Modal = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Modal;
