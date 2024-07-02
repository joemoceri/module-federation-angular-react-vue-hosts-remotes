const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;

module.exports = {
    plugins: [
        {
            plugin: {
                overrideCracoConfig: ({ cracoConfig, pluginOptions, context: { env, paths } }) => { return cracoConfig; },
                overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => { 
                  webpackConfig.plugins = [
                    ...webpackConfig.plugins,
                    new ModuleFederationPlugin({
                      remotes: {
                        angularRemoteApp: "angularRemoteApp@http://localhost:3001/remoteEntry.js",
                        reactRemoteApp: "reactRemoteApp@http://localhost:3002/remoteEntry.js",
                        vueRemoteApp: "vueRemoteApp@http://localhost:3003/remoteEntry.js",
                      },
                      shared:{
                          ...deps,
                        'react-dom': {
                            singleton: true,
                            eager:true
                          },
                          react: {
                            singleton: true,
                            eager:true
                          },
                      }
                    }),
                  ] 
                  return webpackConfig;
                },
                overrideDevServerConfig: ({ devServerConfig, cracoConfig, pluginOptions, context: { env, paths, proxy, allowedHost } }) => { return devServerConfig; },
                overrideJestConfig: ({ jestConfig, cracoConfig, pluginOptions, context: { env, paths, resolve, rootDir } }) => { return jestConfig },
            },
        }
    ]
};