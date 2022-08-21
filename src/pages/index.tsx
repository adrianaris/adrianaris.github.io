import * as React from "react"
import type { HeadFC } from "gatsby"
import Social from "../components/social"
import { SEO } from "../components/seo";

const IndexPage = () => {
  return (
    <main>
      <title>Adrian Serbanescu</title>
       <Social />
      <h1>Welcome to my page</h1>
      <h3>This is a work in progress</h3>
      <h3>Meanwhile just ckeck-up my <a href="https://github.com/adrianaris">github</a></h3>
    </main>
  )
}


export default IndexPage

export const Head: HeadFC = () => <SEO />
