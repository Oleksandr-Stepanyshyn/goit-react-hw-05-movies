import { TailSpin } from 'react-loader-spinner';
import { SpinnerBox } from './Spinner.styled';

export default function Spinner() {
  return (
    <SpinnerBox>
      <TailSpin color="#3f3f40" ariaLabel="loading" />
    </SpinnerBox>
  );
}
