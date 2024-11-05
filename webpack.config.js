const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const path = require('path');
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'microFrontEnd2',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/app/app.module.ts', // Adjust this path
      },
      // shared: {
      //   '@angular/core': { singleton: true, strictVersion: true },
      //   '@angular/common': { singleton: true, strictVersion: true },
      //   '@angular/router': { singleton: true, strictVersion: true },
      // },
    }),
  ],
};