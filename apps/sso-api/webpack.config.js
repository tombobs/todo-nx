const {composePlugins, withNx} = require('@nrwl/webpack');
const {merge} = require('webpack-merge');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), (config) => {
    return merge(config, {
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
            ],
        },
    });
});
