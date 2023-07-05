import { useState } from 'react';

export function useClicks() {
  const [clicks, setClicks] = useState(0);

  function prev() {
    setClicks(clicks - 1);
  }

  function next() {
    setClicks(clicks + 1);
  }

  return { clicks, prev, next };
}
