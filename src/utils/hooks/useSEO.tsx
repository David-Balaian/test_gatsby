// import { graphql, useStaticQuery } from "gatsby";

// export const useSEO = () => {
//     const { wp: { seo } } = useStaticQuery(graphql`
//     query SiteInfoQuery {
//         wp {
//             seo {
//                 contentTypes {
//                     post {
//                         title
//                         schemaType
//                         metaRobotsNoindex
//                         metaDesc
//                     }
//                     page {
//                         metaDesc
//                         metaRobotsNoindex
//                         schemaType
//                         title
//                     }
//                 }
//                 webmaster {
//                     googleVerify
//                     yandexVerify
//                     msVerify
//                     baiduVerify
//                 }
//                 schema {
//                     companyName
//                     personName
//                     companyOrPerson
//                     wordpressSiteName
//                     siteUrl
//                     siteName
//                     inLanguage
//                     logo {
//                         sourceUrl
//                         mediaItemUrl
//                         altText
//                     }
//                 }
//                 social {
//                     facebook {
//                         url
//                         defaultImage {
//                             sourceUrl
//                             mediaItemUrl
//                         }
//                     }
//                     instagram {
//                         url
//                     }
//                     linkedIn {
//                         url
//                     }
//                     mySpace {
//                         url
//                     }
//                     pinterest {
//                         url
//                         metaTag
//                     }
//                     twitter {
//                         username
//                         cardType
//                     }
//                     wikipedia {
//                         url
//                     }
//                     youTube {
//                         url
//                     }
//                 }
//             }
//         }
//     }
// `)

// return seo
// }