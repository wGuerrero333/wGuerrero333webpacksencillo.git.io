const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    mode: "development",
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename: 'bundle.js',
        

    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      // se agrega el html a la carpeta dist
      plugins: [
    
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })]
    };
