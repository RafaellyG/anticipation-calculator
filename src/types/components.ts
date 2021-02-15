export type NumberInputType = {
  label: string;
  help?: string;
  currency?: boolean;
  maxValue?: number;
  maxLength?: number;
  onChange?: (event: any) => void;
};

export type ErrorMessageType = {
  message: string;
  isVisible: boolean;
};

export type TitleType = {
  text: string;
};

export type CurrencyInfoType = {
  label: string;
  value: number;
};
