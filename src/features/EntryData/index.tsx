import { useState } from 'react';

import NumberInput from 'components/NumberInput';
import Title from 'components/Title';
import { Container } from './style';

import { useDebounceEffect } from 'hooks/useDebounceEffect';
import { EntryDataType } from 'types/data';

type fetchResultProps = {
  fetchResult: (entryData: EntryDataType) => Promise<void>;
  clearResult: () => void;
};

const EntryData = ({fetchResult, clearResult}: fetchResultProps) => {

  const [amount, setAmount] = useState<number>();
  const [installments, setInstallments] = useState<number>();
  const [mdr, setMdr] = useState<number>(); 

  const valuesChanged = () => {
    if (amount && installments && mdr) {
      return fetchResult({ amount, installments, mdr});
    }
    clearResult();
  }

  useDebounceEffect(() =>  valuesChanged(), 1000, [amount, installments, mdr])
  
  return (
    <Container>
      <Title text="Simule sua Antecipação"/>
      
      <NumberInput  
        onChange={value => setAmount(value)}
        label="Informe o valor da venda"
        maxLength={8}
        currency/>
      
      <NumberInput
        onChange={value => setInstallments(value)}
        label="Em quantas parcelas"
        help="Máximo de 12 parcelas"
        maxLength={2}/>

      <NumberInput 
        onChange={value => setMdr(value)}
        label="Informe o percentual de MDR"
        maxLength={4}
        />
    </Container>
  );
}

export default EntryData;
