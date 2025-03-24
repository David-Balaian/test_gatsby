import * as React from "react"
import { graphql, PageProps } from "gatsby"
const pageStyles = {
    padding: "10px"
}

const TypegenPage = ({ data }: PageProps<Queries.TypegenPageQuery>) => {
  return (
    <main style={pageStyles}>
      <hr />
      <p>Query Result:</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </main>
  )
}

export default TypegenPage

export const query = graphql`
  query TypegenPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`