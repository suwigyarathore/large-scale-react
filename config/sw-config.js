module.exports = {
  cache: {
    cacheId: "Large-React",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "Large-React",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
