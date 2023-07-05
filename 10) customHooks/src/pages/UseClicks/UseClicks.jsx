// import { useState } from 'react';
import { useClicks } from '../../hooks/useClicks.js';
import { Button } from '../../components/Button/Button.jsx';

function UseClicks() {
  // function useClicks() {
  //   const [clicks, setClicks] = useState(0);

  //   function prev() {
  //     setClicks(clicks - 1);
  //   }

  //   function next() {
  //     setClicks(clicks + 1);
  //   }

  //   return { clicks, prev, next };
  // }

  // const [clicks, setClicks] = useState(0);
  const { clicks, prev, next } = useClicks();

  return (
    <>
      <h1>{ clicks }</h1>
      {/* <Button onClick={() => setClicks(clicks - 1)}>-1</Button>
      <Button onClick={() => setClicks(clicks + 1)}>+1</Button> */}
      <Button onClick={ prev }>-1</Button>
      <Button onClick={ next }>+1</Button>
    </>
  );
}

export default UseClicks;
