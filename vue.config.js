const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'sass-loader',
              options: {
                additionalData:
                  '@import "bootstrap/scss/functions"; @import "bootstrap/scss/variables"; @import "bootstrap/scss/maps"; @import "bootstrap/scss/mixins";',
              },
            },
          ],
        },
      ],
    },
  },
});
