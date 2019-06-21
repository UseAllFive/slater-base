module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'prettier', 'plugin:import/warnings'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        window: 'writable',
        document: 'writable',
        slater: 'readable',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'prettier', 'plugin:import/warnings'],
    plugins: ['prettier', 'import'],
    rules: {
        'class-methods-use-this': 0,
        'no-unused-expressions': [2, { allowTaggedTemplates: true }],
        'no-underscore-dangle': 0,
        'prettier/prettier': 2,
        'consistent-return': 0,
        'import/no-extraneous-dependencies': 0,
        'max-len': [2, 120],
        'object-curly-spacing': [2, 'always'],
        semi: [1, 'never'],
        'no-console': 0,
    },
}
