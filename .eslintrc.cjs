/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
        "plugin:react/jsx-runtime",
        "prettier", // 放在最后覆盖eslint其他配集，防止与eslint配置的其他规则冲突
    ],
    // 与 git的ignore写法一致，不要使用{**/*.ts, **/*.tsx}这种写法，总之就是不能用大括号
    ignorePatterns: [
        "dist",
        ".eslintrc.cjs",
        "*.cjs",
        "*.config.js",
        "**/test/**",
        "**/tests/**",
        "node_modules/**",
        "storybook-static/**",
        "*.test.tsx",
        "*.test.ts",
        "*.test.js",
        "*.spec.tsx",
        "*.spec.ts",
        "*.spec.js",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "prettier"],
    rules: {
        // 开启 prettier 插件提供的 eslint 规则，它会在 eslint 内运行
        "prettier/prettier": "error",
        // 关闭与 prettier 不兼容的规则
        "arrow-body-style": "off",
        // 关闭与 prettier 不兼容的规则
        "prefer-arrow-callback": "off",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "react/self-closing-comp": ["error"],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
};
