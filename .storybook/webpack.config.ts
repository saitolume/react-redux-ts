module.exports = (baseConfig: any, env: any, config: any) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
