import { useState, useRef } from 'react';

function UseRef() {
  const [useStateCount, setUseStateCount] = useState(0);
  const useRefCount = useRef(0); // useRef no provoca render, sin el useState no se ve
  const [lastRefresh, setLastRefresh] = useState(new Date());

  function onClickHandler() {
    useRefCount.current = useRefCount.current + 1;
    setUseStateCount(useStateCount + 1);
  }

  function refresh() {
    setLastRefresh(new Date());
  }

  return (
    <>
      <h1>Last refresh: { `${lastRefresh.getHours()}:${lastRefresh.getMinutes()}:${lastRefresh.getSeconds()}` }</h1>

      <h2>useState count: { useStateCount }</h2>
      <h2>useRefCount count: { useRefCount.current }</h2>
      <button onClick={ onClickHandler }> +1 </button>
      <button onClick={ refresh }> Force refresh </button>
    </>
  );
}

export default UseRef;
