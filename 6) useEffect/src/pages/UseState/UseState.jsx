import { useState } from 'react';
import { Button } from '../../components/Button/Button';

function UseState() {
  const [clicks, setClicks] = useState(0);
  return (
    <Button onClick={() => setClicks(clicks + 1)}>{ clicks }</Button>
  );
}

export default UseState;