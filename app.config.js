export default ({ config }) => {
  return {
    ...config,
    version: process.env.APP_BINARY_VERSION || "1.0.0",
    android: {
      ...config.android,
      versionCode: parseInt(process.env.APP_BUILD_VERSION || 1) 
    },
    ios: {
      ...config.ios,
      buildNumber: process.env.APP_BUILD_VERSION || "1"
    }
  };
};