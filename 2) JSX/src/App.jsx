import './App.css';

function App() {
  // const myArray = [1, 2, 3, 4, 5];
  const myArray = [
    { id: 'id1', name: 'Jona', age: 18, color: 'rgb(255, 255, 255)' },
    { id: 'id2', name: 'Pepe', age: 17, color: 'rgb(0, 0, 0)' },
    { id: 'id3', name: 'Luis', age: 19, color: 'rgb(255, 0, 0)' },
    { id: 'id4', name: 'Ana', age: 99, color: 'rgb(0, 255, 0)' },
    { id: 'id5', name: 'Maria', age: 2, color: 'rgb(0, 0, 255)' },
  ];

  return (
    <>
      <h1 style={{color: 'rgb(255, 0, 0)'}}> Entendiendo JSX </h1>
      <div>
        {/* { myArray.map(myItem => <div key={ myItem }> { `Soy el número ${myItem}` } </div>) } */}
        {
          myArray.map((myItem) =>
            <div style={{color: myItem.color}} key={ myItem.id } className={ myItem.age % 2 === 0 ? 'bg-blue' : 'bg-red' }>
              Hola soy { myItem.name } y tengo { myItem.age } años
            </div>
          )
        }

        <div>
          La media de años es:
          {
            myArray.reduce((acum, myItem) => acum + myItem.age, 0) / myArray.length
          }
        </div>
      </div>
    </>
  );
}

export default App;
