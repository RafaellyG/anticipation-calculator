import { Container, Items } from "./style";

import CurrencyInfo from "components/CurrencyInfo";
import Loading from "components/Loading";
import Subtitle from "components/Subtitle";

import { ResultDataType } from "types/data";

type ResultType = {
  resultData: ResultDataType;
  isLoading: boolean;
}

const Result = ({resultData, isLoading}: ResultType) => {

  return (
    <Container>
      <Items>
        <Subtitle text="Você Receberá:" />
        <CurrencyInfo label="Amanhã" value={resultData.tomorrow}/>
        <CurrencyInfo label="Em 15 dias" value={resultData.fifteenDays}/>
        <CurrencyInfo label="Em 30 dias" value={resultData.thirtyDays}/>
        <CurrencyInfo label="Em 90 dias" value={resultData.ninetyDays}/>
        {isLoading && <Loading/>}
      </Items>
    </Container>
  );
}

export default Result;
