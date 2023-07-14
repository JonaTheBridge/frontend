import { useState } from 'react';

export function useGetData() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  async function getData({ route, method='GET', body, headers={} }) {
    setData();
    setError();
    setLoading(true);
    try {
      const response = await fetch(`https://restcountries.com/v3.1/${route}`, {
        method,
        headers: {'Content-Type': 'application/json', ...headers },
        body,
      });

      if (response.ok) {
        const responseAsJson = await response.json();
        setData(responseAsJson);
      } else {
        setError(new Error(`${response.status}: ${response.statusText}`));
      }
    } catch(e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  return { getData, data, error, loading  };
}
