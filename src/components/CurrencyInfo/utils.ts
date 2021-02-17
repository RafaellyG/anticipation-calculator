const format = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };

export const currencyFormat = (value?: number) => {
  return value?.toLocaleString('pt-BR', format);
}

export const labelFormatter = (days: number) => {
  return days > 1 ? `Em ${days} dias` : 'Amanhã'
}
