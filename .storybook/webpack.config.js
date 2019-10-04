const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
const webpack = require('webpack')
const path = require('path')

console.log('CUZZOCZZO')
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx']
  config.resolve.plugins = [
    new TsConfigPathsPlugin({
      configFileName: path.resolve(__dirname, '../stories/tsconfig.json'),
    }),
  ]
  config.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV === 'development',
    }),
  )

  return config
}
