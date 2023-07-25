const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
    plugins: [
        "tailwindcss",
        "autoprefixer",
        cssnano({
            preset: "default",
        }),
        purgecss({
            content: ["./public/*.html"],
            defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
    ],
};
