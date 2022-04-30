import operate from '../logic/operate';

describe('Check if operations are working and if results are strings', () => {
  test('Add two numbers', () => {
    expect(operate(10, 12, '+')).toBe('22');
  });
  test('Subtract two numbers', () => {
    expect(operate(10, 12, '-')).toBe('-2');
  });
  test('Multiply two numbers', () => {
    expect(operate(10, 12, 'x')).toBe('120');
  });
  test('Divide two numbers', () => {
    expect(operate(5, 2, '÷')).toBe('2.5');
  });
  test('Remainder of division of two numbers', () => {
    expect(operate(10, 12, '%')).toBe('10');
  });
});
