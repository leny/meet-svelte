/* leny/meet-svelte
 *
 * /webpack.config.js
 *
 * coded by leny@flatLand!
 * started at 27/04/2019
 */

const mode = process.env.NODE_ENV || "development";

module.exports = {
    entry: {
        bundle: ["./src/app.js"],
    },
    resolve: {
        extensions: [".js", ".svelte"],
    },
    output: {
        path: `${__dirname}/public`,
        filename: "[name].js",
        chunkFilename: "[name].[id].js",
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: "svelte-loader",
                    options: {
                        emitCss: true,
                        hotReload: true,
                    },
                },
            },
        ],
    },
    mode,
    devtool: "source-map",
};
