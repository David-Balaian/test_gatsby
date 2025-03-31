// import { GatsbyNode } from "gatsby"

// export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
//   actions.createTypes(`

//     interface WpHeaderServices_Layout {
//         fieldGroupName: String
//       }
//         interface WpDynamicServicesPageDynamicSections_Layout {
//         fieldGroupName: String
//       }

//       interface WpDynamicServicesPageDynamicSectionsSectionLayout_Fields {
//         fieldGroupName: String
//       }
        
//       type WpDynamicServicesPageDynamicSectionsSectionLayout implements WpDynamicServicesPageDynamicSections_Layout & WpHeaderServices_Layout {
//       fieldGroupName: String
//       sectionTitle: String
//       sectionItems: [WpDynamicServicesPageDynamicSectionsSectionItems]
//     }

//     type WpDynamicServicesPageDynamicSectionsSectionItems {
//       fieldGroupName: String
//       itemName: String
//       itemUrl: String
//     }


//     `)
// }

// const path = require(`path`)
// const { slash } = require(`gatsby-core-utils`)

// export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // query content for WordPress posts
//   const {
//     data: {
//       allPost: { nodes: allPosts },
//     },
//   } = await graphql(`
//     query {
//       allWpPost {
//         nodes {
//           id
//           uri
//         }
//       }
//     }
//   `)

//   const postTemplate = path.resolve(`./src/templates/post.js`)

//   allPosts.forEach(post => {
//     createPage({
//       // will be the url for the page
//       path: post.uri,
//       // specify the component template of your choice
//       component: slash(postTemplate),
//       // In the ^template's GraphQL query, 'id' will be available
//       // as a GraphQL variable to query for this post's data.
//       context: {
//         id: post.id,
//       },
//     })
//   })
// }

