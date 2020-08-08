import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

describe('<App />', () => {
  test('Renders without crashing', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('app-title')).toBeInTheDocument();
  });
});
