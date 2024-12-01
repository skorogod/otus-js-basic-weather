module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier", "eslint-config-prettier"],
  plugins: ["prettier", "jest"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "max-len": "off",
    "import/prefer-default-export": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-useless-escape": "off",
    "no-console": "off",
    "no-alert": "off",
    "func-names": "off",
    "no-unused-vars": "off",
    "no-restricted-syntax": "off",
    "prefer-promise-reject-errors": "off",
  },
};
