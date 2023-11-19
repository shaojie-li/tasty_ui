module.exports = {
    minimize: true,
    plugins: {
        "postcss-import": {},
        "tailwindcss/nesting": {},
        tailwindcss: {
            config: "./tailwind.config.js",
        },
        autoprefixer: {},
    },
};
