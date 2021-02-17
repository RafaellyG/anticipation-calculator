import React from 'react';

import { CurrencyInfoType } from 'types/components';
import { Text, Bold, Container } from './style';

const CurrencyInfo = ({ label, value }: CurrencyInfoType) => {
  const format = { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' };

  const currencyFormat = (value?: number) => {
    return value?.toLocaleString('pt-BR', format);
  }

  return (
    <Container>
      <Text>{label}: <Bold>{currencyFormat(value)}</Bold></Text>
    </Container>
  );
}

export default CurrencyInfo;
