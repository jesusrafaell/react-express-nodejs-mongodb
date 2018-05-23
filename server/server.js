import express from 'express';
import webpackDevMiddleare from 'webpack-dev-middleware';
import webpackHotMiddleare from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';

const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static('www'));

app.use(webpackDevMiddleare(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    filename: 'bundle.js',
    stats: {
        colors: true
    },
    historyApiFallback: true
}));

app.use(webpackHotMiddleare(compiler, {
    log: console.log

}));

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'),  () => 
    console.log(`Server run on port ${app.get('port')}`)
);