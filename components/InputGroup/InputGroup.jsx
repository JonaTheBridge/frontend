import './InputGroup.css';

function InputGroup(props) {
  return (
    <div className='inputGroup row'>
      <label className='col-12 col-md-4 col-lg-3' htmlFor={ props.input.id }> { props.label } </label>
      <input className='col-12 col-md-8 col-lg-9'
        onChange={ props.input.onChange}
        id={ props.input.id }
        placeholder={ props.input.placeholder }
        type={ props.input.type || 'text' }
        value={ props.value }
      />
    </div>
  );
}

export default InputGroup;
