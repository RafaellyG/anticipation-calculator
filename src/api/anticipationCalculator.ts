import { EntryDataType, ResultDataType, ResponseDataType } from "types/data";
import { handleResponse } from "./errorHandling";

const api = 'https://hash-front-test.herokuapp.com/';

const generateRequestOptions = (entryData: EntryDataType) => {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entryData)
  };
};

const serializeData = (data: ResponseDataType) => {
  return {
    tomorrow: data['1'],
    fifteenDays: data['15'],
    thirtyDays: data['30'],
    ninetyDays: data['90'],
  }
}

export const getAnticipation = async (entryData: EntryDataType): Promise<ResultDataType> => {

  const requestOptions = generateRequestOptions(entryData);
  const response = await
    fetch(api, requestOptions)
      .catch(response => handleResponse(response))
      .then(response => handleResponse(response));

  const data = await response.json();

  return serializeData(data);
};