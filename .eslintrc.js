module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
    {
      'files': [
        '*.ts',
        '*.tsx'
      ], // Your TypeScript files extension
      'extends': [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      'parserOptions': {
        'project': [
          './tsconfig.json'
        ],
        tsconfigRootDir: __dirname,
        sourceType: 'module',

        'createDefaultProgram': true
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'indent': [
      'warn',
      2, {
        'SwitchCase': 1
      },
    ],
    'linebreak-style': [
      'warn',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};