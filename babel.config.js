module.exports = {
    presets: [
        "@babel/preset-env",  // Ensures compatibility with modern JavaScript
        "@babel/preset-react" // Ensures compatibility with React JSX
    ],
    plugins: [
        "@babel/plugin-proposal-private-methods",
        "@babel/plugin-proposal-private-property-in-object"
    ]
};
