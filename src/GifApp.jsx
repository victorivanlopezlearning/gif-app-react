import { useState } from 'react';
import Form from './components/Form';
import ErrorMessage from './components/ErrorMessage';

const GifApp = () => {

  const [categories, setCategories] = useState([]);
  const [errorMesagge, setErrorMesagge] = useState('');

  const onAddCategory = (newCategory) => {

    const categoryExist = categories.find((category) => category.toUpperCase() === newCategory.toUpperCase());
    if (categoryExist) {
      setErrorMesagge(`${newCategory} ya está listado. Por favor, indica uno diferente.`);
      return;
    }
    setErrorMesagge('');
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Buscador de GIFs</h1>

      <Form
        onAddCategory={onAddCategory}
      />
      {errorMesagge && <ErrorMessage errorMesagge={errorMesagge} />}

      <ol>
        {categories?.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}

export default GifApp;