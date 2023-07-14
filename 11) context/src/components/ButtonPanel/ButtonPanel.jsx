import { useState } from 'react';
import './ButtonPanel.css';
import { useClicksContext } from '../../contexts/clicksContext.jsx';
import { Button } from '../Button/Button.jsx';

export function ButtonPanel() {
  const { totalPrev, totalNext } = useClicksContext();
  const [panelClicks, setPanelClicks] = useState(0);

  function prev() {
    setPanelClicks(panelClicks - 1);
    totalPrev();
  }

  function next() {
    setPanelClicks(panelClicks + 1);
    totalNext();
  }

  return (
    <div className='buttonPanel'>
      <Button onClick={prev}>-1</Button>
      <h3>{ panelClicks }</h3>
      <Button onClick={next}>+1</Button>
    </div>
  );
}
