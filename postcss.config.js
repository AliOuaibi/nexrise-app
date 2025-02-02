module.exports = {
  plugins: [
    require("postcss-replace")({
      pattern: "color-adjust",
      data: { "color-adjust": "print-color-adjust" }
    }),
    require("autoprefixer"),
  ]
};
