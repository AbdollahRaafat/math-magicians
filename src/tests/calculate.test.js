import calculate from '../logic/calculate';

describe('Testing the calculate fuction', () => {
  test('+', () => {
    const items = { total: '21', next: '7', operation: '+' };
    expect(calculate(items, items.operation).total).toBe('28');
  });

  test('-', () => {
    const items = { total: '21', next: '7', operation: '-' };
    expect(calculate(items, items.operation).total).toBe('14');
  });

  test('x', () => {
    const items = { total: '21', next: '7', operation: 'x' };
    expect(calculate(items, items.operation).total).toBe('147');
  });

  test('/', () => {
    const items = { total: '21', next: '7', operation: '÷' };
    expect(calculate(items, items.operation).total).toBe('3');
  });

  test('%', () => {
    const items = { total: '21', next: '4', operation: '%' };
    expect(calculate(items, items.operation).total).toBe('1');
  });
});
