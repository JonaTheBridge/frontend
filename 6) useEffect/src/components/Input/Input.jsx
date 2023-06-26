function Input({ type, placeholder, maxLength, onChange, onKeyUp, onBlur }) {
  return (
    <input
      type={ type }
      placeholder={ placeholder }
      maxLength={ maxLength }
      onChange={ onChange }
      onKeyUp={ onKeyUp }
      onBlur={ onBlur }
    />
  );
}

export default Input;