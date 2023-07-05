import { useAPIRequest } from '../../hooks/useAPIRequest.js';

function UseAPIRequest() {
  const { data, error, loading } = useAPIRequest({ route: 'all' });
  // const { data, error, loading } = useAPIRequest({ route: 'al' });

  return (
    <>
      <h1>Hola</h1>
      { loading && <h2>Loading...</h2>}
      { error && <h2> Ha ocurrido un error: { error.message }</h2>}
      { data && JSON.stringify(data[0]) }
    </>
  );
}

export default UseAPIRequest;
