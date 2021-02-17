import { useState } from 'react';
import { Container } from './style';

import { getAnticipation } from 'api/anticipationCalculator';
import EntryData from 'features/EntryData';
import Result from 'features/Result';
import ErrorMessage from 'components/ErrorMessage';

import { EntryDataType, ResultDataType } from 'types/data';

const Calculator = () => {

  const emptyResult = {
    tomorrow: 0,
    fifteenDays: 0,
    thirtyDays: 0,
    ninetyDays: 0
  };
  const errorTimeout = 5000;

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ResultDataType>(emptyResult);

  const handleError = (error: Error) => {
    setErrorMessage(error.message);

    setTimeout(() => {
      setErrorMessage('');
    }, errorTimeout);

    setResult(emptyResult);
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
    setResult(emptyResult);
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
