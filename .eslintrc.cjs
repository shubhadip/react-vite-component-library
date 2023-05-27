module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'prettier', 'plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['./src/vite-env.d.ts', '*.config.cjs', '*.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest'
  },
  plugins: ['react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    'consistent-return': 'off',
    'no-plusplus': 'off',
    'no-else-return': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    indent: 'off',
    'no-tabs': 'off',
    'import/order': 'off',
    // "max-len": [2, 100, 4, { "ignoreUrls": true }],
    'no-template-curly-in-string': 'error',
    'prefer-arrow-callback': 'error',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true
    }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/naming-convention': ['error', {
      selector: 'memberLike',
      modifiers: ['private'],
      format: ['camelCase'],
      leadingUnderscore: 'allow'
    }, {
      selector: 'typeLike',
      format: ['PascalCase']
    }, {
      selector: 'class',
      format: ['PascalCase']
    }, {
      selector: 'interface',
      format: ['PascalCase'],
      prefix: ['I']
    }, {
      selector: 'enum',
      format: ['PascalCase']
    }],
    'require-jsdoc': ['warn', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: false,
        ClassDeclaration: false,
        ArrowFunctionExpression: false,
        FunctionExpression: false
      }
    }],
    'no-console': 'warn',
    'no-debugger': process.env.NODE_ENV === 'development' ? 'warn' : 'error'
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'd.ts']
      }
    }
  },
  overrides: [{
    files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
    env: {
      jest: true
    }
  }]
};