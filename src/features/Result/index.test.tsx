import { render, cleanup } from '@testing-library/react';
import Result from './index';

const mockResult = [
  { days: 1, value: 11 },
  { days: 2, value: 22 },
  { days: 3, value: 33 },
  { days: 4, value: 44 }
];

afterEach(cleanup);

describe('Result component', () => {

  it('should show currency info results', () => {
    const { getAllByTestId } = render(<Result isLoading={false} resultData={mockResult} />);
    expect(getAllByTestId('currency-info')).toHaveLength(4);
  });
  
  it('should show loading', () => {
    const { getByTestId } = render(<Result isLoading={true} resultData={[]} />);
    expect(getByTestId('loading')).toBeInTheDocument();
  });
});
