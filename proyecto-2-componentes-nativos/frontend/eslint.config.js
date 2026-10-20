const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

// Las exportaciones y la caché de Expo no forman parte del código a revisar.
module.exports = defineConfig([expoConfig, { ignores: ['dist/**', '.expo/**'] }]);
