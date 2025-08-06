// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')

module.exports = defineConfig([
  expoConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      prettier: require('eslint-plugin-prettier'),
    },
    ignores: ['dist/*'],
  },
])
