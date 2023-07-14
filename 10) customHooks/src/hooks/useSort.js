import { useState } from 'react';

export function useSort(dbData) {
  const [data, setData] = useState(dbData);
  const [order, setOrder] = useState({});

  function changeOrder(prop) {
    const newOrder = {};
    order[prop] === 'asc' && (newOrder[prop] = 'desc');
    order[prop] === 'desc' && delete newOrder[prop];
    !order[prop] && (newOrder[prop] = 'asc');

    setOrder(newOrder);
    return newOrder;
  }

  function sort(prop) {
    const config = changeOrder(prop);
    const order = config[prop];

    const localData = [...dbData];
    localData.sort((a, b) => {
      let aProp = a[prop];
      let bProp = b[prop];
      if (typeof a[prop] === 'string') {
        aProp = a[prop].toUpperCase();
        bProp = b[prop].toUpperCase();
      }

      if (order === 'asc') {
        return aProp < bProp ? -1 : 1;
      } else if (order === 'desc') {
        return aProp > bProp ? -1 : 1;
      } else {
        return 1;
      }
    });

    setData(localData);
  }

  return { data, order, sort };
}
