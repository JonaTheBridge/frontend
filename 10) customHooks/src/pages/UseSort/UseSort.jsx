import { useSort } from '../../hooks/useSort.js';
import Table from '../../components/Table/Table.js';

function UseSort() {
  const dbData = [
    { name: 'Jona', age: 32, money: '501€' },
    { name: 'Alex', age: 33, money: '51€' },
    { name: 'Zack', age: 31, money: '50€' },
    { name: 'Maria', age: 1, money: '999€' },
    { name: 'Jose', age: 99, money: '1€' },
  ];

  // const dbData2 = [
  //   { name: 'Jona', age: 32, sons: 0, money: '501€' },
  //   { name: 'Alex', age: 33, sons: 1, money: '51€' },
  //   { name: 'Zack', age: 31, sons: 5, money: '50€' },
  //   { name: 'Maria', age: 1, sons: 4, money: '999€' },
  //   { name: 'Jose', age: 99, sons: 3, money: '1€' },
  // ];

  const { data, order, sort } = useSort(dbData);

  function getSymbol(order) {
    if (!order) {
      return;
    }

    const upArrow = 9650;
    const downArrow = 9660;

    const code = order === 'asc' ? upArrow : downArrow;
    return String.fromCharCode(code);
  }

  return (
    <Table>
      <thead>
        <tr>
          {/* <th onClick={ () => sort('name') }>
            Nombre { getSymbol(order.name) }
          </th>
          <th onClick={ () => sort('age') }>
            Edad { getSymbol(order.age) }
          </th>
          <th onClick={ () => sort('money') }>
            Precio { getSymbol(order.money) }
          </th> */}
          {
            Object.keys(data[0]).map((prop, index) =>
              <th key={`th${index}`} onClick={ () => sort(prop) }>
                {prop} { getSymbol(order[prop]) }
              </th>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((person, personIndex) =>
            <tr key={`person${personIndex}`}>
              {/* <td>
                { person.name }
              </td>
              <td>
                { person.age }
              </td>
              <td>
                { person.money }
              </td> */}
              {
                Object.keys(person).map((prop, propIndex) =>
                  <td key={`td${personIndex}-${propIndex}`}>
                    {person[prop]}
                  </td>
                )
              }
            </tr>
          )
        }
      </tbody>
    </Table>
  );
}

export default UseSort;
