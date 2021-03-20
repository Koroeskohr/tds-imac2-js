import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExerciseThreePage } from '.';
import Fish from './Fish';
import { testWithErrorMessage } from '../_testing';

test('The page should contain a fish', () => {
  render(<ExerciseThreePage />);
  testWithErrorMessage(() => {
    expect(screen.queryByText(/°>/)).not.toBeNull();
  }, 'No fish head °> found');
});

test('Fish size', () => {
  const f = render(<Fish size={2} />);
  testWithErrorMessage(() => {
    expect(f.container.querySelector('p')).not.toBeNull();
  }, 'The fish component should contain a <p> tag');
  testWithErrorMessage(() => {
    expect(screen.queryByText(/><==°>/)).not.toBeNull();
  }, 'A fish for size=2 should have been ><==°>');
});
