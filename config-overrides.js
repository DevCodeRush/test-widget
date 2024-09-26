module.exports = function override(config, env) {
    if (env !== "production") {
        return config;
    }

    // Get rid of hash for js files
    config.output.filename = "static/js/[name].js"
    config.output.chunkFilename = "static/js/[name].chunk.js"

    // Get rid of hash for media files
    config.output.assetModuleFilename = 'static/media/[name][ext]'

    // Get rid of hash for css files
    const miniCssExtractPlugin = config.plugins.find(element => element.constructor.name === "MiniCssExtractPlugin");
    miniCssExtractPlugin.options.filename = "static/css/[name].css"
    miniCssExtractPlugin.options.chunkFilename = "static/css/[name].css"

    return config;
};