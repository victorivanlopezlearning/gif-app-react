import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Test <GifItem />', () => {

  const title = 'Metal Gear Solid';
  const url = 'https://api.giphy.com/v1/gifs/search?Metal-Gear-Solid';

  test('Should match with the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should display the image with the SRC and ALT indicated', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);
    const { alt, src } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(`Imagen ${title}`);
  });

  test('should display the title in the component', () => {
    render(<GifItem title={title} url={url} />);

    const { textContent } = screen.getByRole('heading', { level: 3 });
    expect(textContent).toBe(title);
  });
});