import './App.css';
import Person from '../../components/Person/Person.jsx';

function App() {
  const myArray = [
    { id: 'id1', name: 'Jona', age: 18 },
    { id: 'id2', name: 'Pepe', age: 17 },
    { id: 'id3', name: 'Luis', age: 19 },
    { id: 'id4', name: 'Ana', age: 99 },
    { id: 'id5', name: 'Maria', age: 2 },
  ];

  return (
    <>
      <h1> React components </h1>
      <div>
        { myArray.map(myItem =>
          // <Person
          //   key={ myItem.id }
          //   name={ myItem.name }
          //   age={ myItem.age }
          // />
          <Person key={ myItem.id } { ...myItem } />
        ) }
      </div>
    </>
  );
}

export default App;
