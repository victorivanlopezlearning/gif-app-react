import { useState } from 'react';
import Form from './components/Form';
import ErrorMessage from './components/ErrorMessage';

const GifApp = () => {

  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const onAddCategory = (newCategory) => {

    const categoryExist = categories.find((category) => category.toUpperCase() === newCategory.toUpperCase());
    if (categoryExist) {
      setErrorMessage(`${newCategory} ya está listado. Por favor, indica uno diferente.`);
      return;
    }
    setErrorMessage('');
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Buscador de GIFs</h1>

      <Form
        onAddCategory={onAddCategory}
      />
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <ol>
        {categories?.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}

export default GifApp;