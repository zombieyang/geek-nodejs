module.exports = {
    mode: 'development',
    devtool: false,
    entry: __dirname + '/index.jsx',
    output: {
        filename: 'main.js',
        path: __dirname + '/../node/source/'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/, use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    }
}