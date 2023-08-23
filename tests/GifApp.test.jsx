import { fireEvent, render, screen } from '@testing-library/react';
import GifApp from '../src/GifApp';

describe('Tests in <GifApp.jsx />', () => {

  const category = 'Metal Gear Solid';

  test('Should match with the snapshot', () => {
    const { container } = render(<GifApp />);
    expect(container).toMatchSnapshot();
  });

  test('Should show heading H1 with the expected text', () => {
    render(<GifApp />);

    const { textContent } = screen.getByRole('heading', { level: 1 });

    expect(textContent).toBe('Buscador de GIFs');
  });

  test('Should not show error message and Heading h2 of the category title', () => {

    render(<GifApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    const { textContent } = screen.getByRole('heading', { level: 2 });

    expect(screen).not.toBe(`${category} ya está listado. Por favor, indica uno diferente.`);
    expect(textContent).toBe(category);
  });

  test('Should show error message when repeating category', () => {

    render(<GifApp />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);
    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    expect(screen.getByText(`${category} ya está listado. Por favor, indica uno diferente.`)).toBeTruthy();
  });
});