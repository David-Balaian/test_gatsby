import * as React from "react"
import {type HeadFC, type PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <img style={{width: '100%'}} src={'https://volosa.blob.core.windows.net/websitecontainernew/images/default-source/png/banners/about-volo.jpg?sfvrsn=1fc28a7c_2'} />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
