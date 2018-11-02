const immutableMatchers = require('jest-immutable-matchers');

process.on('unhandledRejection', unhandledPromiseRejection => {
  throw new Error(unhandledPromiseRejection);
});

jest.addMatchers(immutableMatchers);
