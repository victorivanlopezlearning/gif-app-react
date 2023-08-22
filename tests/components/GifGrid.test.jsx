import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import useGifsByCategory from '../../src/hooks/useGifsByCategory';

jest.mock('../../src/hooks/useGifsByCategory'); // Indicar un mock completo del path indicado

describe('Tests in <GifGrid />', () => {

  const category = 'Metal Gear Solid';

  test('Should initially show the Loading and Category Title', () => {

    useGifsByCategory.mockReturnValue({
      imagesGifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    const { textContent } = screen.getByRole('heading', { level: 2 });

    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(textContent).toBe(category);
  });

  test('Should show Items when loading images from useGifsByCategory', () => {

    const gifs = [
      {
        id: '1',
        title: 'metal gear solid art GIF',
        url: 'https://media1.giphy.com/media/gEY69DiqZDolO/',
      },
      {
        id: '2',
        title: 'solid snake GIF',
        url: 'https://media1.giphy.com/media/IO8WGxqnH5ybC/',
      },
      {
        id: '3',
        title: 'metal gear solid spoilers GIF',
        url: 'https://media0.giphy.com/media/n1gW36dMjySUU/',
      },
    ];

    useGifsByCategory.mockReturnValue({
      imagesGifs: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(3); // Comprobar que se muestran 3 imagenes
  });
});