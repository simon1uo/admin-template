module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "vue/valid-template-root": "off",
    "vue/no-multiple-template-root": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index", "401", "404"],
      },
    ],
  },
};
