import { useState, useEffect } from 'react';
import { Button } from '../../components/Button/Button';

function UseEffect() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log('Se inicia la página');
  }, []);

  useEffect(() => {
    console.log('Has hecho click!');
  }, [clicks]);

  return (
    <Button onClick={() => setClicks(clicks + 1)}>{ clicks }</Button>
  );
}

export default UseEffect;