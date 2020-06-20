import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import FiestaImg from "../images/gatsby-astronaut.png"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from 'styled-components';
const StyledButton = styled.button`
  background-color: gray;
  border: 1px solid black;
  padding: 4px 10px;
  color: white;
  border-radius: 6px;
`

export const query = graphql`
  query {
    spacex {
      launchesPast(limit: 1) {
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        links {
          article_link
          video_link
        }
        rocket {
          rocket_name
          first_stage {
            cores {
              flight
              core {
                reuse_count
                status
              }
            }
          }
          second_stage {
            payloads {
              payload_type
              payload_mass_kg
              payload_mass_lbs
            }
          }
        }
        ships {
          name
          home_port
          image
        }
      }
    }
  }
`

const IndexPage = (props) => {
  const users = props.data;
  console.log(users);
  return (
    <Layout>
      <SEO title="Home" />
      <StyledButton>Styled component button</StyledButton>
      <h1>Hi people </h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
        <img src={FiestaImg} alt="A dog smiling in a party hat" />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

// const IndexPage = () => {
//   // ----------------------
//   // BUILD TIME DATA FETCHING USING GRAPHQL
//   // ----------------------
//   const gatsbyRepoData = useStaticQuery(graphql`
//     query {
//       github {
//         repository(name: "gatsby", owner: "gatsbyjs") {
//           id
//           nameWithOwner
//           url
//         }
//       }
//     }
//   `)

//   // ----------------------
//   // RUNTIME DATA FETCHING
//   // ----------------------
//   const [starsCount, setStarsCount] = useState(0)
//   useEffect(() => {
//     // get data from GitHub api
//     fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
//       .then(response => response.json()) // parse JSON from request
//       .then(resultData => {
//         setStarsCount(resultData.stargazers_count)
//       }) // set data for the number of stars
//   }, [])

//   return (
//     <Layout>
//       <h1>Examples</h1>
//       <h2>Build Time</h2>
//       <p>
//         This data from GitHub is fetched using gatsby-source-graphql at build
//         time. This data will only update when the site is rebuilt by Gatsby, but
//         removes the need and latency to hit the GitHub API when the site loads.
//         Without needing to hit an API, the site will load faster for visitors
//         because the data was already loaded when the site built. This is
//         especially beneficial for users with slower internet connections or if
//         you want to allow your site to be visited offline using a plugin like
//         {` `}
//         <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-offline/">
//           gatsby-plugin-offline
//         </a>
//         .
//       </p>
//       <p>
//         Gatsby repo:{` `}
//         <a
//           href={
//             gatsbyRepoData.github.repository &&
//             gatsbyRepoData.github.repository.nameWithOwner
//           }
//         >
//           {gatsbyRepoData.github.repository
//             ? gatsbyRepoData.github.repository.url
//             : `(to get this data at build time from GitHub you need to include a GitHub access token in the request by including a .env file)`}
//         </a>
//       </p>
//       <h2>Runtime</h2>
//       <p>
//         This data from GitHub is fetched using the Fetch API at runtime. This
//         data will update every time you refresh this page.{` `}
//       </p>
//       <p>Star count for the Gatsby repo: {starsCount}</p>
//     </Layout>
//   )
// }

export default IndexPage
