import path from 'path';

export default {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/index.js', 
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
        publicPath: '/dist'
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    }
};