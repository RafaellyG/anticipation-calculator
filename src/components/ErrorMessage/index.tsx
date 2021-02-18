import { ErrorToast, Message } from './style';
import { ErrorMessageType } from 'types/components';

const ErrorMessage = ({ message, isVisible }: ErrorMessageType) => {

  return (
    <ErrorToast data-testid="error-message" isVisible={isVisible}>
      <Message>{message}</Message>
    </ErrorToast>
  );
}

export default ErrorMessage;
