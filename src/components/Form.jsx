import { useState } from 'react';

const Form = ({ onAddCategory }) => {

  const [category, setCategory] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if ([category].includes('')) return;

    onAddCategory(category);
    setCategory('');
  };

  return (
    <form
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder="Buscar gif"
        onChange={({ target }) => setCategory(target.value)}
        value={category}
      />
    </form>
  )
}

export default Form;