import '@testing-library/jest-dom/extend-expect';
import { RenderResult, render } from '@testing-library/react';
import React from 'react';
import { ShowCritical } from '../index';

describe('ShowCritical', () => {
  let renderResult: RenderResult;

  const doRender = () => {
    renderResult = render(<ShowCritical setState={jest.fn()} />);
  };

  it('renders correctly', () => {
    doRender();

    const { container } = renderResult;

    expect(container).toMatchSnapshot();
  });
});
