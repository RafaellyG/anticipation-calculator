import { EntryDataType, ResultDataType } from "types/data";
import { handleResponse } from "./errorHandling";

const api = 'https://hash-front-test.herokuapp.com/';

const generateRequestOptions = (entryData: EntryDataType) => {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(entryData)
  };
};

const serializeData = (data: any): ResultDataType[] => {
  const result: ResultDataType[]  = [];
  
  Object.keys(data).forEach(key => {
    result.push({
      days: Number(key),
      value: Number(data[key])
    });
  });
  return result;
}

export const getAnticipation = async (entryData: EntryDataType): Promise<ResultDataType[]> => {

  const requestOptions = generateRequestOptions(entryData);
  const response = await
    fetch(api, requestOptions)
      .catch(response => handleResponse(response))
      .then(response => handleResponse(response));

  const data = await response.json();

  return serializeData(data);
};