const path = require("path");

exports.onCreateWebpackConfig = ({ actions }: {actions: any}) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, "src/components"),
                "@config": path.resolve(__dirname, "src/config"),
                "@fonts": path.resolve(__dirname, "src/fonts")
            },
        }
    });
};
