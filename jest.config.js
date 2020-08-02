module.exports = {
  testRegex: '.*\\.test\\.(js|jsx|ts|tsx)$',

  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },

  collectCoverageFrom: ['lib/**/*.{js,ts,jsx,tsx}', '!**/*.stories.*'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    '**/*': {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
