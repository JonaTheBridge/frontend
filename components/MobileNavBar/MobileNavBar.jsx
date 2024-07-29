import { useState, useRef } from 'react'
import styled from 'styled-components'

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
  cursor: pointer;

  & > div.line {
    background: ${ props => props.$linesColor || 'black' };
    width: 100%;
    height: 3px;
    border-radius: 5px;
    transition: all .5s;
    transform-origin: left;
  }

  &.open div.line:first-child {
    transform: rotate(45deg);
  }

  &.open div.line:nth-child(2) {
    opacity: 0;
  }

  &.open div.line:last-child {
    transform: rotate(-45deg);
  }
`

const Aside = styled.div`
  display: flex;
  width: 0px;
  height: ${ props => props.height };
  background-color: ${ props => props.$backgroundColor };
  z-index: 1;
  position: fixed;
  left: 0;
  top: ${ props => props.top };
  transition: width ${ props => props.$animationTime }ms;

  &.open {
    width: ${ props => props.width };
  }

  & * {
    margin-left: -${ props => props.width };
    transition: margin-left ${ props => props.$animationTime }ms;
  }

  &.open * {
    margin-left: 0vw;
  }
`

function MobileSideBar(props) {
  const {
    children,
    animationTime=1000,
    asideMarginTop='10vh',
    asideWidth='50vw',
    asideHeight='90vh',
    asideColor='lightgray',
    linesColor='black'
  } = props

  const [open, setOpen] = useState()
  const [openClass, setOpenClass] = useState()
  const timeoutId = useRef()

  function tooglePanel() {
    clearTimeout(timeoutId.current)
    if (!openClass) {
      console.log('if')
      setOpen(true)
      setTimeout(() => {
        setOpenClass(true)
      }, 1)
    } else {
      console.log('else')
      setOpenClass(false)
      timeoutId.current = setTimeout(() => {
        setOpen(false)
      }, animationTime)
    }
  }

  return (
    <>
      <Button onClick={ tooglePanel } className={ openClass && 'open' } $linesColor={ linesColor }>
        <div className='line'/>
        <div className='line'/>
        <div className='line'/>
      </Button>
      { open &&
        <Aside
          top={ asideMarginTop }
          width={ asideWidth }
          height= { asideHeight }
          className={ openClass && 'open' }
          $animationTime={ animationTime }
          $backgroundColor= { asideColor }
        >
          { children }
        </Aside>
      }
    </>
  )
}

export default MobileSideBar
