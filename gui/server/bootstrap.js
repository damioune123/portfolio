require('ignore-styles');
require('url-loader');
require('file-loader');
require('@babel/plugin-proposal-class-properties')
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          targets: {
            esmodules: true,
          },
        },
      ]
  ],
  plugins: [
    'syntax-dynamic-import',
    'dynamic-import-node',
    'react-loadable/babel',
    '@babel/plugin-proposal-class-properties'
  ]
});
require('./index');
