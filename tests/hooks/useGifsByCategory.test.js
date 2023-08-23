import { renderHook, waitFor } from '@testing-library/react';
import useGifsByCategory from '../../src/hooks/useGifsByCategory';

describe('Test in Hook useGifsByCategory', () => {

  const category = 'Metal Gear Solid';

  test('should return the initial state', () => {

    const { result } = renderHook(() => useGifsByCategory(category)); // renderHook() retorna. result: resultado del hook | unmount: lo que retorna el hook cuando aún no es montado | rerender: redenretiza nuevamente el hook 
    const { imagesGifs, isLoading } = result.current;

    expect(imagesGifs.length).toBe(0); // Array vacío
    expect(isLoading).toBeTruthy(); // Variable en True
  });

  test('should return an array images and isLoading in false', async () => {

    const { result } = renderHook(() => useGifsByCategory(category));

    await waitFor(() => { // Hace que espere
      expect(result.current.imagesGifs.length).toBeGreaterThan(0) // ESpere a que esta condición se cumpla. toBeGreaterThan(0) mayor a el valor proporcionado
    });

    const { imagesGifs, isLoading } = result.current;

    expect(imagesGifs.length).toBeGreaterThan(0); // Array con valores
    expect(isLoading).toBeFalsy(); // Variable en False
  });
});