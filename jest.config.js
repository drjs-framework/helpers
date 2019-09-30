module.exports = {
  verbose: true,
  testRegex: '(/src/__tests__/.*|(\\.|/)(test|spec))\\.[j,t]sx?$',
  roots: [
    '<rootDir>/src/__tests__/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
