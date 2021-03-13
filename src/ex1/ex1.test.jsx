import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { testWithErrorMessage } from '../_testing';
import {
  CreateElement,
  CreateElementAsJsx,
  Jsx,
  JsxAsCreateElement,
} from './index';

test('React.createElement -> JSX', () => {
  const createElement = render(<CreateElement />);
  const c1 = createElement.asFragment().firstChild;
  cleanup();
  const createElementAsJsx = render(<CreateElementAsJsx />);
  const c2 = createElementAsJsx.asFragment().firstChild;

  testWithErrorMessage(() => {
    expect(c1).toEqual(c2);
  }, 'The first element does not match the structure of the second');
});

test('JSX -> React.createElement', () => {
  const createElement = render(<Jsx />);
  const c1 = createElement.asFragment().firstChild;
  cleanup();
  const createElementAsJsx = render(<JsxAsCreateElement />);
  const c2 = createElementAsJsx.asFragment().firstChild;

  testWithErrorMessage(() => {
    expect(c1).toEqual(c2);
  }, 'The first element does not match the structure of the second');
});
