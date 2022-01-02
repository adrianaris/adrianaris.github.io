module.exports = {
  siteMetadata: {
    siteUrl: "https://www.adrianserbanescu.com",
    title: "Adrian Serbanescu",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-D296ZNCS72",
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
