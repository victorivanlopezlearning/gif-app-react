import { useState } from 'react';
import Form from './components/Form';

const GifApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (category) => {
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>Buscador de GIFs</h1>

      <Form 
        onAddCategory={onAddCategory} 
      />

      <ol>
        {categories?.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  )
}

export default GifApp;