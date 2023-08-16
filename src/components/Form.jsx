import { useState } from 'react';

const Form = ({ onAddCategory }) => {

  const [category, setCategory] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const newCategory = category.trim();
    if ([newCategory].includes('')) return;

    onAddCategory(newCategory);
    setCategory('');
  };

  return (
    <form
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder="Buscar GIFs"
        onChange={({ target }) => setCategory(target.value)}
        value={category}
      />
    </form>
  )
}

export default Form;