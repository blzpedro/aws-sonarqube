import React from 'react';
import { render } from '@testing-library/react';
import { Test } from '@/components/Test';

describe('Test component', () => {
  it('should render Test', () => {
    const renderResult = render(<Test />);
    expect(renderResult.getByTestId('test')).toBeInTheDocument();
  });
});
