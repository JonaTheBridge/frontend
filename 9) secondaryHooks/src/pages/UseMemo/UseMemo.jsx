/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo } from 'react';

function UseMemo() {
  const [useStateCount, setUseStateCount] = useState(0);
  const [lastRefresh, setLastRefresh] = useState(new Date());

  const nextCount = useMemo(() =>
    useStateCount + 1,
  [useStateCount, lastRefresh]);

  const prevCount = useMemo(() =>
    useStateCount - 1,
  [lastRefresh]);

  function addOne() {
    setUseStateCount(useStateCount + 1);
  }

  function refresh() {
    setLastRefresh(new Date());
  }

  return (
    <>
      <h1>Last refresh: { `${lastRefresh.getHours()}:${lastRefresh.getMinutes()}:${lastRefresh.getSeconds()}` }</h1>
      <p>
        prev count: { prevCount }
        <b style={{ margin: '0 10px' }}>useState count: { useStateCount }</b>
        next count: { nextCount }
      </p>

      <button onClick={ addOne }> +1 </button>
      <button onClick={ refresh }> Force refresh </button>
    </>
  );
}

export default UseMemo;
