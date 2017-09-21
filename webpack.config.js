// module.exports = {
//   entry: [
//     './src/index.js'
//   ],
//   output: {
//     path: __dirname,
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       exclude: /node_modules/,
//       loader: 'babel',
//       query: {
//         presets: ['react', 'es2015', 'stage-1']
//       }
//     }]
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: './'
//   }
// };



module.exports = {
  entry: './src/index.js',
  
  output: {
    // path: 'build',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader'] 
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader' 
      }
    ]
  }
}
