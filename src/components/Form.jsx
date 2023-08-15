import { useState } from 'react';

const Form = ({ onAddCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onAddCategory(inputValue);
    setInputValue('');
  };

  return (
    <form
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder="Buscar gif"
        onChange={({ target }) => setInputValue(target.value)}
        value={inputValue}
      />
    </form>
  )
}

export default Form;