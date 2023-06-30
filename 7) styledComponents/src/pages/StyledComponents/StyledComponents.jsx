import { useState } from 'react';
import Button from '../../components/Button/Button.js';

function UseState() {
  const [clicks, setClicks] = useState(0);
  return (
    <>
      <Button className={'myClass'} width={'200px'} onClick={() => setClicks(clicks + 1)}>{ clicks }</Button>
      <Button color={'red'} onClick={() => setClicks(clicks - 1)}>{ clicks }</Button>
    </>
  );
}

export default UseState;
