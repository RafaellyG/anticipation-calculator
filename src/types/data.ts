export type EntryDataType = {
  amount: number;
  installments: number;
  mdr: number;
};

export type ResultDataType = {
  tomorrow: number;
  fifteenDays: number;
  thirtyDays: number;
  ninetyDays: number;
};

export type ResponseDataType = {
  '1': number;
  '15': number;
  '30': number;
  '90': number;
};
