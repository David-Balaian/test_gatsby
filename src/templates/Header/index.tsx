import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { flatListToHierarchical } from '../../utils/helpers'
import Menu from './Menu'

type Props = {}

const Header = (props: Props) => {

    const { allWpMenuItem } = useStaticQuery(graphql`query MyQuery {
        allWpMenuItem {
          edges {
            node {
              id
              title
              path
              parentId
              url
              uri
              order
              nodeType
              label
              description
            }
          }
        }
      }`)

  return (
    <div><Menu menuData={flatListToHierarchical(allWpMenuItem.edges)} /></div>
  )
}

export default Header

