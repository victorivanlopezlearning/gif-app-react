import PropTypes from 'prop-types';
import { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';

export const Form = ({ onAddCategory }) => {

  const [category, setCategory] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const newCategory = category.trim();
    if ([newCategory].includes('')) {
      setErrorMessage('No debe ir vacío');
      return;
    };
    setErrorMessage('');
    onAddCategory(newCategory);
    setCategory('');
  };

  return (
    <>
      <form
        aria-label='form'
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Buscar GIFs"
          onChange={({ target }) => setCategory(target.value)}
          value={category}
        />
      </form>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </>
  )
}

Form.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};