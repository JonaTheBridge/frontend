import './Person.css';

function Person(props) {
  const { name, age } = props;

  return (
    <div className='person'>
      { `Hola, me llamo ${ name } y tengo ${ age } años` }
    </div>
  );
}

export default Person;
