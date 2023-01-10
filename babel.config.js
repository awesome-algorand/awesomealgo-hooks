module.exports = {
  presets: [['env'], '@babel/preset-react', '@babel/preset-typescript'],
  env: {
    test: {
      plugins: ['dynamic-import-node'],
    },
    production: {
      plugins: ['@babel/plugin-syntax-dynamic-import'],
    },
  },
};
