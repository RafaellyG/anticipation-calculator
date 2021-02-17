import React from 'react';

import { CurrencyInfoType } from 'types/components';
import { Text, Bold, Container } from './style';
import { currencyFormat, labelFormatter } from './utils';

const CurrencyInfo = ({ days, value }: CurrencyInfoType) => {

  return (
    <Container data-testid={`currency-info`}>
      <Text>{labelFormatter(days)}: <Bold>{currencyFormat(value)}</Bold></Text>
    </Container>
  );
}

export default CurrencyInfo;
