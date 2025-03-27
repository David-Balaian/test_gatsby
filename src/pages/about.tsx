import { graphql, PageProps, useStaticQuery } from 'gatsby'
import React from 'react'

interface AboutPageData {
  wpPage: {
    title: string;
    content: string;
    // add more fields as needed
  }
}

const About: React.FC<PageProps<AboutPageData>> = ({ data }) => {
  return (
    <>
      <h2>about</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div dangerouslySetInnerHTML={{ __html: data?.allWpPage?.nodes?.[0]?.content }} />
    </>
  )
}

export default About

export const query = graphql`
query GetPageByUri {
allWpPage(filter: { uri: { eq: "/about/" } }) {
nodes {
  id
  parentId
  title
  uri
  template {
    templateName
  }
  content
  contentTypeName
  link
  slug
  status
}
}}`