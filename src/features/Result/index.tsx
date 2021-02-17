import { Container, Items } from "./style";

import CurrencyInfo from "components/CurrencyInfo";
import Loading from "components/Loading";
import Subtitle from "components/Subtitle";

import { ResultDataType } from "types/data";

type ResultType = {
  resultData: ResultDataType[];
  isLoading: boolean;
}

const Result = ({ resultData, isLoading }: ResultType) => {

  return (
    <Container>
      <Items>
        <Subtitle text="Você Receberá:" />
        {resultData.map(result => {
          return (
            <CurrencyInfo
              key={result.days}
              days={result.days}
              value={result.value} />
          )
        })
        }
        {isLoading && <Loading />}
      </Items>
    </Container>
  );
}

export default Result;
