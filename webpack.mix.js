const mix = require("laravel-mix");
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js("resources/js/app.js", "public/js")
  // .react()
  // .sass("resources/sass/app.scss", "public/css")
  // .postCss("resources/css/app.css", "public/css", [
  //   //
  // ])
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".ts", ".tsx"],
      alias: {
        '@components': path.resolve('client/src/components/'),
        '@images': path.resolve('client/src/assets/images/'),
        '@css': path.resolve('client/src/assets/css/'),
        '@cssComponents': path.resolve('client/src/assets/css/components/'),
    }
    },
  });
