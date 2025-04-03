import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import ServicesComponent from './Menu'
import Nav from "./Nav/Nav";

type Props = {}

const Header = (props: Props) => {

    const { wpMenu } = useStaticQuery(graphql`query headerQuery {
      wpMenu(name: {eq: "Header"}) {
        headerMenus {
          logo {
             node {
                publicUrl
              }
          }
          extendedMenuItems {
            name
            type
            list {
              link {
                target
                title
                url
              }
            }
            imagecontainer {
              redirecturl
              title
              description
              
              image {
                node {
                  id
                  gatsbyImage(
                    formats: WEBP
                    width: 220
                    placeholder: DOMINANT_COLOR
                  )
                }
              }
            }
          }
          simpleMenuItems {
            name
            type
            list {
              header
              links {
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
  console.log(wpMenu)
    return ( <Nav extendedMenuItems={wpMenu.headerMenus
      .extendedMenuItems} simpleMenuItems={wpMenu.headerMenus
      .simpleMenuItems} logo={wpMenu.headerMenus.logo.node.publicUrl}  /> )

}

export default Header

