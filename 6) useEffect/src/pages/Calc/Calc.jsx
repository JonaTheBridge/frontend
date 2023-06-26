import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import './Calc.css';

export default function Calc() {
  // const [screen, setScreen] = useState(''); // useState() => return [state, setState()]
  const [screen, setScreen] = useState(0);
  const symbols = ['C', '+', '-', '*', '/', '='];

  function clickHandler(symbol) {
    switch (symbol) {
      case '=':
        setScreen(eval(screen));
        break;
      case 'C':
        setScreen(0);
        break;
      default:
        screen === 0 ? setScreen(symbol) : setScreen(`${screen}${symbol}`);
        break;
    }
  }

  return (
    <div className='container'>
      <div className='screen'> { screen } </div>
      <div className='numbers'>
        <div className='button'>
          {
            [...Array(10)].map((e, index) => (
              <Button key={`calcButton${index}`} onClick={ () => clickHandler(index) }>
                { index }
              </Button>
            ))
          }
        </div>
      </div>
      <div className='symbols'>
        <div className='button'>
          {
            symbols.map((symbol) => (
              <Button key={`calcButton${symbol}`} onClick={ () => clickHandler(symbol) }>
                { symbol }
              </Button>
            ))
          }
        </div>
      </div>
    </div>
  );
}
