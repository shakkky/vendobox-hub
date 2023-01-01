module.exports = {
  extends: [
    // 'eslint:recommended',
    'react-app',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:styled-components-a11y/recommended',
  ],
  plugins: ['jest', 'xss', 'graphql'],
  rules: {
    'no-console': 0,
    'jest/no-identical-title': 'error',
    'jest/no-alias-methods': 'error',
    'jest/no-mocks-import': 0,
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': 0, // we will come back to when converting to TypeScript
    'react/react-in-jsx-scope': 0, // not needed as we are running React 17
    'styled-components-a11y/click-events-have-key-events': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-curly-brace-presence': [
      2,
      { props: 'never', children: 'never' },
    ],
    'react/jsx-boolean-value': 2,

    'react/no-access-state-in-setstate': 2,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/await-thenable': 1,
        '@typescript-eslint/prefer-nullish-coalescing': 1,
        '@typescript-eslint/prefer-includes': 1,
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
      },
      rules: {
        'react/display-name': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
      plugins: ['@typescript-eslint'],
    },
    {
      files: ['**/*.test.*', '**/__tests__/*', '**/__mocks__/*'],
      rules: {
        'react/display-name': 'off',
      },
    },
  ],
};
