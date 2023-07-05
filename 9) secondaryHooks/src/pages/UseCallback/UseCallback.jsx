/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';

function UseCallback() {
  const [useStateCount, setUseStateCount] = useState(0);
  const [lastRefresh, setLastRefresh] = useState(new Date());

  const addToCount = useCallback((number) => {
    return number + useStateCount;
  }, [lastRefresh]);

  function addOne() {
    setUseStateCount(useStateCount + 1);
  }

  function refresh() {
    setLastRefresh(new Date());
  }

  return (
    <>
      <h1>Last refresh: { `${lastRefresh.getHours()}:${lastRefresh.getMinutes()}:${lastRefresh.getSeconds()}` }</h1>
      <h2>useState count: { useStateCount }</h2>
      <h2>Add 2 to useState count: = { addToCount(2) }</h2>
      <h2>Add 3 to useState count: = { addToCount(3) }</h2>

      <button onClick={ addOne }> +1 </button>
      <button onClick={ refresh }> Force refresh </button>
    </>
  );
}

export default UseCallback;
