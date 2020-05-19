module.exports = {
  root: true,
  extends: [
    'xo',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'standard',
  ],
  env: {
    'react-native/react-native': true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'react-native', 'prettier', 'flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
    react: {
      version: '16.5',
    },
  },
  globals: {
    __FACEBOOK_APP_ID__: true,
    __GOOGLE_MAPS_ID__: true,
    __API_HOST__: true,
    Headers: true,
    Request: true,
    Response: true,
    sinon: true,
  },
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    semi: [2, 'never'],
    'max-len': [2, 80, 2, { ignorePattern: '^import.*from.*$|t\\(.*\\)$' }],
    'max-nested-callbacks': [2, 5],
    yoda: 0,
    'padded-blocks': ['error', { classes: 'always' }],
    'space-before-function-paren': [2, 'never'],
    'no-console': 2,
    'prefer-promise-reject-errors': 0,
    'promise/catch-or-return': 'error',
    'react/display-name': 0,
  },
}
