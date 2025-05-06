const mix = require("laravel-mix");

mix.sass("src/styles/main.scss", "public/build/css").options({
  postCss: [require("autoprefixer")],
});
mix.js("src/scripts/script.js", "public/build/js");
mix.sourceMaps();

// 🔄 BrowserSync: подставь адрес своего локального сайта
mix.browserSync({
  proxy: "http://vew.test", // ← твой адрес в Laragon
  files: [
    "public/build/css/*.css",
    "public/build/js/*.js",
    "public/**/*.php",
    "public/*.php",
    "*.php",
  ],
});
