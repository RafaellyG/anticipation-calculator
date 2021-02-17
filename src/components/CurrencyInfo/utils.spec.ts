import { currencyFormat, labelFormatter } from './utils';

describe('utils functions of currency info', () => {
  it('should format number as currency', () => {
    expect(currencyFormat(20.2)).toBe('R$\u00a020,20');
    expect(currencyFormat(90)).toBe('R$\u00a090,00');
    expect(currencyFormat(0)).toBe('R$\u00a00,00');
  });

  it('should format currency labels', () => {
    expect(labelFormatter(1)).toBe('Amanhã');
    expect(labelFormatter(30)).toBe('Em 30 dias');
    expect(labelFormatter(90)).toBe('Em 90 dias');
  });
});
