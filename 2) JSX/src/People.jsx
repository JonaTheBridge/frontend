import './People.css';

function People() {
  const myArray = [
    { id: 'id1', name: 'Jona', age: 18 },
    { id: 'id2', name: 'Pepe', age: 17 },
    { id: 'id3', name: 'Luis', age: 19 },
    { id: 'id4', name: 'Ana', age: 99 },
    { id: 'id5', name: 'Maria', age: 2 },
  ];

  return (
    <>
      <h1> Entendiendo JSX </h1>
      <div>
        {/* { myArray
          .filter((myItem) => myItem.age >= 18)
          .map(myItem => <span> { myItem } </span>)
        } */}
        {
          myArray
            .filter((myItem) => {
              return myItem.age >= 18;
            })
            .map((myItem) => {
              return <span key={ myItem.id }> { myItem.name } </span>;
            })
        }
      </div>
    </>
  );
}

export default People;
