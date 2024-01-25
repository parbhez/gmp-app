// module.exports = {
//     // ... other configurations
//     publicPath: process.env.VUE_APP_BASE_URL,
//     // ... other configurations
//   }

// module.exports = {
//   publicPath:
//     process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
// };

module.exports = {
  resolve: {
    alias: {
      "vue-video-player": "vue-video-player/dist/ssr",
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/smart/" : "/",
};
