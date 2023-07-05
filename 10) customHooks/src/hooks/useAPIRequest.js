import { useState, useEffect } from 'react';

export function useAPIRequest({ route, method='GET', body, headers={} }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setData();
      setError();
      setLoading(true);
      try {
        const response = await fetch(`https://restcountries.com/v3.1/${route}`, {
          method,
          headers: {'Content-Type': 'application/json', ...headers },
          body,
        });

        if (response.ok) { // response.ok === response.status.200
          const responseAsJson = await response.json();
          setData(responseAsJson);
        } else {
          setError(new Error(`${response.status}: ${response.statusText}`));
          // error === { message: '401: Unathorized' }
        }
      } catch(e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return { data, error, loading };
}
