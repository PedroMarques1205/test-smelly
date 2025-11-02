import eslintPluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        NodeJS: "readonly",
        // globals do Jest
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        jest: "readonly"
      }
    },
    plugins: {
      jest: eslintPluginJest
    },
    rules: {
      // regras ESLint recomendadas
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off",

      // regras do Jest
      "jest/no-disabled-tests": "warn",
      "jest/no-conditional-expect": "error",
      "jest/no-identical-title": "error"
    }
  }
];
