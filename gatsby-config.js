module.exports = {
  siteMetadata: {
    siteUrl: "https://adrianserbanescu.com",
    title: "Adrian Serbanescu",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-D296ZNCS72"],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
