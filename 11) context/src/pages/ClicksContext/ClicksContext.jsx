import { useClicksContext } from '../../contexts/clicksContext.jsx';
import { Button } from '../../components/Button/Button.jsx';
import { ButtonPanel } from '../../components/ButtonPanel/ButtonPanel.jsx';

function ClicksContext() {
  const { totalClicks, totalPrev, totalNext } = useClicksContext();

  return (
    <>
      <div className='buttonPanel'>
        <Button onClick={totalPrev}>-1</Button>
        <h1>{ totalClicks }</h1>
        <Button onClick={totalNext}>+1</Button>
      </div>
      <ButtonPanel/>
      <ButtonPanel/>
      <ButtonPanel/>
    </>
  );
}

export default ClicksContext;
