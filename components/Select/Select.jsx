import styled from 'styled-components';

const StyledSelect = styled.select`
  background-color: ${ props => props?.$colors?.background || 'white' };
  border: 0;
  color: ${ props => props?.$colors?.secondary || 'black' };
  cursor: pointer;

  &:focus-visible {
    outline: none;
  }

  &>option {
    background-color: ${ props => props?.$colors?.primary || 'white' };
    cursor: pointer;
  }

  &>option:checked {
    background-color: ${ props => props?.$colors?.secondary || 'white' };
    color:  ${ props => props?.$colors?.primary || 'black' };
    cursor: pointer;
  }
`;

function Select(props) {
  const { data, myCallback, value } = props

  function onChangeHandler(e) {
    myCallback(e.target.value)
  }

  return (
    <StyledSelect
      onChange={onChangeHandler}
      value={ value }
    >
      {
        data.map((item, index) =>
          <option key={`${item.code}${index}`} value={item.code}>
            {item.name}
          </option>
        )
      }
    </StyledSelect>
  )
}

export default Select
