import React from "react"
import { graphql, PageProps } from "gatsby"

type AuthorType = {
  name: string
  profession: string
  description: string
}

type BlogType = {
  blogContent: string
  author: AuthorType
}

type PostType = {
  slug: string
  title: string
  blog: BlogType
}

type DataProps = {
  allWpPost: {
    nodes: PostType[]
  }
}

type ContextProps = {
  slug: string
}

const BlogPost: React.FC<PageProps<DataProps, ContextProps>> = ({ data }) => {
  const post = data.allWpPost.nodes[0]

  if (!post) {
    return <p>Blog not found</p>
  }

  const { title, blog } = post
  const { blogContent, author } = blog

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <div style={{
        width:'100%',
        maxWidth: '800px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        marginTop: '40px'
      }}>
        <h1>{title}</h1>
        <p><strong>Author:</strong> {author.name} - {author.profession}</p>
        <p><em>{author.description}</em></p>
        <div dangerouslySetInnerHTML={{ __html: blogContent }} />
      </div>

    </div>
  )
}

export default BlogPost

export const query = graphql`
  query GetSinglePost($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        title
        blog {
          blogContent
          author {
            name
            profession
            description
          }
        }
        seo {
          title
          metaDesc
          opengraphImage {
            sourceUrl
          }
        }
      }
    }
  }
`

// SEO Meta Using HeadFC
import { HeadFC } from "gatsby"

export const Head: HeadFC<DataProps> = ({ data }) => {
  const post = data.allWpPost.nodes[0]
  const seo = post?.seo

  return (
    <>
      <title>{seo?.title || post.title}</title>
      <meta name="description" content={seo?.metaDesc || ""} />
      {seo?.opengraphImage?.sourceUrl && (
        <meta property="og:image" content={seo.opengraphImage.sourceUrl} />
      )}
    </>
  )
}
