import { H2Subtitle } from './style';
import { TitleType } from 'types/components';

const Subtitle = ({ text }: TitleType) => {
  return (
    <H2Subtitle>{text}</H2Subtitle>
  );
}

export default Subtitle;
