import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata
};

type QueryTypes = {
  site: {
    siteMetadata: {
      title: string
      description: string
      twitterUsername: string
      image: string
      siteUrl: string
    }
  }
}
