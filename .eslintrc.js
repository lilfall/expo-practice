module.exports = {
  root: true,
  extends: ['@react-native', 'prettier', 'plugin:jest/recommended'],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'prettier', 'import', 'jest'],

  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },

  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'max-len': ['error', { code: 160, ignoreUrls: true, ignoreRegExpLiterals: true }],
    'import/order': [
      'error',
      {
        groups: [['builtin'], ['external'], ['internal'], ['parent'], ['sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc'
        },
        pathGroups: [
          {
            pattern: '{@/hooks/**,@/lib/**,@/context/**,@/api/**,@/assets/**,@/i18n/**,@/providers/**,@/config}',
            group: 'internal'
          },
          {
            pattern: '{@/components/**,@/containers/**,@/styles/**,@/screens/**}',
            group: 'parent'
          }
        ]
      }
    ]
  }
};
