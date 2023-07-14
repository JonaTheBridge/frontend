import { useGetData } from '../../hooks/useGetData.js';

function UseGetData() {
  const { getData, data, error, loading } = useGetData();
  async function onClickHandler() {
    await getData({ route: 'all' });
  }

  return (
    <>
      <button onClick={onClickHandler}>Get data</button>
      { loading && <h2>Loading...</h2>}
      { error && <h2> Ha ocurrido un error: { error.message }</h2>}
      { data && JSON.stringify(data[0]) }
    </>
  );
}

export default UseGetData;
