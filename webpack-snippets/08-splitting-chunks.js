exports.splitChunks = {
    optimization: {
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                default: false,
                vendors: {
                    test: /node_modules/,
                    name: "vendors",
                },
            },
        },
    }
};

exports.entry = {
    entry: {
        main: path.join(rootPath, 'src', 'index.js'),
        anotherFile: path.join(rootPath, 'src', 'anotherFile.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(rootPath, 'public')
    },
};

exports.html = {
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack .NET meetup",
            chunks: ['main', 'vendors']
        })
    ]
}