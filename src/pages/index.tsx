import * as React from "react"
import type { HeadFC } from "gatsby"
import { SEO } from "@components/seo";
import Layout from "@components/layout";
import Introduction from "@components/introduction";

const IndexPage = () => {
  return (
      <Layout>
        <Introduction />
      </Layout>
  )
}


export default IndexPage

export const Head: HeadFC = () => <SEO />
