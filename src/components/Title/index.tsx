import { TitleType } from 'types/components';
import { H1Title } from './style';

const Title = ({ text }: TitleType) => {
  return (
    <H1Title>{text}</H1Title>
  );
}

export default Title;
