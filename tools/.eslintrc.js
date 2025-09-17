module.exports = {
    extends: "../.eslintrc.json",
    env: {
        node: true,
        browser: false,
    },
    parserOptions: {
        sourceType: "script",
    },
    rules: {
        "@typescript-eslint/no-require-imports": "off",
    },
};
