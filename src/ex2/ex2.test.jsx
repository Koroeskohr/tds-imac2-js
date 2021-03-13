import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExerciseTwoPage, character } from '.';
import { testWithErrorMessage } from '../_testing';
import Character from './Character';

describe('Part 1', () => {
  test('The page should be intact', () => {
    render(<ExerciseTwoPage />);
    testWithErrorMessage(() => {
      const el = screen.queryByText('Here are our characters');
      expect(el).not.toBeNull();
    }, 'The initial p tag is gone, you might not return anything');
  });

  test('Character should be defined', () => {
    const {
      age, isInPrison, job, name, picture,
    } = character;
    const c = (
      <Character
        name={name}
        age={age}
        job={job}
        imageUrl={picture}
        isInPrison={isInPrison}
      />
    );
    testWithErrorMessage(() => {
      expect(c).not.toBeNull();
    }, 'Character is not defined yet');
  });

  test('Character does not contain an undefined value', () => {
    const {
      age, isInPrison, job, name, picture,
    } = character;
    render(
      <Character
        name={name}
        age={age}
        job={job}
        imageUrl={picture}
        isInPrison={isInPrison}
      />,
    );
    testWithErrorMessage(() => {
      expect(screen.queryByText('undefined')).toBeNull();
    }, 'The content of your component contains undefined, this should not happen');
  });

  test('Structure is valid', () => {
    const {
      age, isInPrison, job, name, picture,
    } = character;
    const { container } = render(
      <Character
        name={name}
        age={age}
        job={job}
        imageUrl={picture}
        isInPrison={isInPrison}
      />,
    );
    testWithErrorMessage(() => {
      expect(container).toMatchSnapshot();
    }, 'The content of the Character component is invalid');
  });

  test('Page contains the Character component', () => {
    render(<ExerciseTwoPage />);
    testWithErrorMessage(() => {
      expect(screen.queryByText('Andy Dufresne')).not.toBeNull();
    }, 'The Character component with Andy Dufresne is not in the page');
  });
});

describe('Part 2', () => {
  test.skip('No test here', () => {});
});
