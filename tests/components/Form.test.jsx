import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '../../src/components';

describe('Tests in <Form />', () => {
  test('Should match with the snapshot', () => {
    const { container } = render(<Form onAddCategory={() => { }} />);
    expect(container).toMatchSnapshot();
  });

  test('Should change the input value', () => {
    render(<Form onAddCategory={() => { }} />);

    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Metal Gear Solid' } });
    expect(input.value).toBe('Metal Gear Solid');
  });

  test('should call onAddCategory if the input has a value', () => {

    const inputValue = 'Metal Gear Solid';
    const onAddCategory = jest.fn(); // jest.fn() | es un Mock de simulación de la función

    render(<Form onAddCategory={onAddCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onAddCategory).toHaveBeenCalled(); // Valida que la función indicada fue llamada al menos 1 vez
    expect(onAddCategory).toHaveBeenCalledTimes(1); // Valida que la función indicada fue llamada las veces que indiquemos
    expect(onAddCategory).toHaveBeenCalledWith(inputValue); // Valida que la función indicada fue mandada a llamar con el valor del inputValue 
  });

  test('Should show the error if the input is empty', () => {

    const onAddCategory = jest.fn();

    render(<Form onAddCategory={onAddCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(screen.getByText('No debe ir vacío')).toBeTruthy(); // Confirmar que el texto aparece en el HTML
    expect(onAddCategory).toHaveBeenCalledTimes(0); // La función no fue llamada
    expect(onAddCategory).not.toHaveBeenCalled(); // La función no fue llamada
  });
});