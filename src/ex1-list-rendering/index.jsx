import React from 'react';

// eslint-disable-next-line no-unused-vars
import movies from './movies.json';

// eslint-disable-next-line import/prefer-default-export
export const ListRenderingExercise = () => (
  <div>
    {movies.map((movie) => (
      <div key={movie.id}>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <p>{movie.title} ({movie.year})</p>
        <p>Actors:</p>
        <ul>
          {movie.actors.map((actor) => (
            <li key={actor}>{actor}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
