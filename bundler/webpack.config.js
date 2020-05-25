const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = 
{
    entry: 
    {
        index: path.resolve(__dirname, '../src/index.js'),
        page: path.resolve(__dirname, '../src/page.js'),
        intro: path.resolve(__dirname, '../src/intro.js'),
        about: path.resolve(__dirname, '../src/about.js')
    },
    devtool: 'source-map',
    devServer: 
    {
        contentBase: './dist',
        open: true,
        host: '0.0.0.0',
        useLocalIp : true
    },
    output: 
    {
        filename: '[id].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins: 
    [
        new htmlWebpackPlugin
        ({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html'),
            chunks: ['index', 'intro']
        }),
        new htmlWebpackPlugin
        ({
            filename: 'sun.html',
            template: path.resolve(__dirname, '../src/sun.html'),
            chunks: ['index', 'page']
        }),
        new htmlWebpackPlugin
        ({
            filename: 'arty.html',
            template: path.resolve(__dirname, '../src/arty.html'),
            chunks: ['index', 'page']
        }),
        new htmlWebpackPlugin
        ({
            filename: 'dev.html',
            template: path.resolve(__dirname, '../src/dev.html'),
            chunks: ['index', 'page']
        }),
        new htmlWebpackPlugin
        ({
            filename: 'atomium_page.html',
            template: path.resolve(__dirname, '../src/projects/atomium_page.html'),
            chunks: ['index', 'page']
        }),
        new htmlWebpackPlugin
        ({
            filename: 'illus.html',
            template: path.resolve(__dirname, '../src/illus.html'),
            chunks: ['index', 'page']
        }),
        new htmlWebpackPlugin
        ({
            filename: 'arty_page.html',
            template: path.resolve(__dirname, '../src/projects/arty_page.html'),
            chunks: ['index', 'page']
        }),
        new htmlWebpackPlugin
        ({
            filename: 'sun_page.html',
            template: path.resolve(__dirname, '../src/projects/sun_page.html'),
            chunks: ['index', 'page']
        }),
        new htmlWebpackPlugin
        ({
            filename: 'dev_page.html',
            template: path.resolve(__dirname, '../src/projects/dev_page.html'),
            chunks: ['index', 'page']
        }),
        new htmlWebpackPlugin
        ({
            filename: 'illus_page.html',
            template: path.resolve(__dirname, '../src/projects/illus_page.html'),
            chunks: ['index', 'page']
        }),
        new htmlWebpackPlugin
        ({
            filename: 'atomium.html',
            template: path.resolve(__dirname, '../src/atomium.html'),
            chunks: ['index', 'page']
        }),
        new htmlWebpackPlugin
        ({
            filename: 'about.html',
            template: path.resolve(__dirname, '../src/about.html'),
            chunks: ['index', 'about']
        }),


        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin([{from: 'static'}])
    ],
    module: 
    {
        rules: 
        [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.styl$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/, 
                use: 
                [
                    {
                        loader: 'file-loader',
                        options: {outputPath: 'images/'}
                    }
                ]
            },
            {
                test: /\.(ttf|otf|woff|woff2|eot)$/, 
                use: 
                [
                    {
                        loader: 'file-loader',
                        options: {outputPath: 'fonts/'}
                    }
                ]
            },
            {
                test: /\.html$/, 
                use: ['html-loader']
            }
        ]
    }
}