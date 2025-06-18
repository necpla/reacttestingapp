import { render, screen, fireEvent } from '@testing-library/react';
import AddTwoNumbers from './add-two-numbers';

test('adds two numbers and displays the result', () => {
  render(<AddTwoNumbers />);

  const input1 = screen.getByTestId('num1');
  const input2 = screen.getByTestId('num2');
  const button = screen.getByText('Add');

  fireEvent.change(input1, { target: { value: '5' } });
  fireEvent.change(input2, { target: { value: '10' } });
  fireEvent.click(button);

  const result = screen.getByTestId('result');
  expect(result).toHaveTextContent('Sum: 15');
});