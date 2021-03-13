/* eslint-disable import/prefer-default-export */
import chalk from 'chalk';

export const testWithErrorMessage = (test, message) => {
  try {
    test();
  } catch (e) {
    const err = new Error(
      `${chalk.blue(chalk.bold('Teacher\'s hint >'))} ${message}. \n\n${e}`,
    );
    Error.captureStackTrace(err, testWithErrorMessage);
    throw err;
  }
};
