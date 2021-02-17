import { useState } from 'react';
import { Container } from './style';

import { getAnticipation } from 'api/anticipationCalculator';
import EntryData from 'features/EntryData';
import Result from 'features/Result';
import ErrorMessage from 'components/ErrorMessage';

import { EntryDataType, ResultDataType } from 'types/data';

const Calculator = () => {

  const errorTimeout = 5000;

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ResultDataType[]>([]);

  const handleError = (error: Error) => {
    setErrorMessage(error.message);

    setTimeout(() => {
      setErrorMessage('');
    }, errorTimeout);

    setResult([]);
  }

  const fetchAnticipation = async (entryData: EntryDataType) => {
    try {
      setIsLoading(true);
      setResult(await getAnticipation(entryData));
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearResult = () => {
    setResult([]);
  };

  return (
    <>
      <Container>
        <EntryData
          fetchResult={fetchAnticipation}
          clearResult={clearResult} />

        <Result resultData={result} isLoading={isLoading} />
      </Container>
      <ErrorMessage isVisible={!!errorMessage} message={errorMessage}></ErrorMessage>
    </>
  );
}

export default Calculator;
