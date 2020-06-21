import React from "react"
import { graphql } from "gatsby"
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

export default IndexPage
