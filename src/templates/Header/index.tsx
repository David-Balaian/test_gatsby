import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import ServicesComponent from './Menu'

type Props = {}

const Header = (props: Props) => {

    const { wpMenu } = useStaticQuery(graphql`query MyQuery {
        wpMenu(name: {eq: "Header"}) {
          industries {
            industries {
              links {
                link {
                  title
                  url
                  target
                }
              }
              imagecontainer {
                description {
                  description
                  header
                }
                image {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
          services {
            services {
              servicescontent {
                serviceHeader
                servicelink {
                  link {
                    target
                    title
                    url
                  }
                }
              }
            }
          }
        }
      }`)

    return (
        <div>
            <ServicesComponent data={wpMenu}  />
        </div>
    )
}

export default Header

