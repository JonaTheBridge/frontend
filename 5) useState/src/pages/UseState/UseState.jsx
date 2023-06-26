import { useState } from 'react';
import { Button } from '../../components/Button/Button';

function UseState() {
  const initialValue = 0;
  const [clicks, setClicks] = useState(initialValue);

  function onClickHandler() {
    setClicks(clicks + 1);
  }

  return (
  // <Button
  //   onClick={ () => setClicks(clicks + 1) }
  //   children={ clicks }
  // />
    <Button onClick={ onClickHandler }>
      { clicks }
    </Button>
  );
}

export default UseState;
