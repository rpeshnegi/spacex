import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerPoster from "../images/videoposter.jpg"
import BannerVideo from "../images/video.mp4"

import LaunchesCard from "../components/launches-card/launches-card"

class IndexPage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {}

    render() {
        return (
            <Layout>
                <SEO title="Home" />
                <div className="banner">
                    <div className="bannercaption">
                        <h1>
                            SMALLSAT RIDESHARE <br />
         PROGRAM
         </h1>
                    </div>
                    <video poster={BannerPoster}
                        className="video-player"
                        height="100%"
                        width="100%"
                        loop
                        muted
                        autoPlay
                    >
                        <source
                            src={BannerVideo}
                            type="video/mp4"
                        />
                    </video>

                </div>
                <div className="container-fluid extra-space">
                    <section className="dadicated-block">
                        <h2 className="text-center"> DEDICATED ESPA CLASS  <br />
MISSIONS AS LOW AS $1M </h2>
                        <div className="row">
                            <div className="col-sm-6 ">
                                <div className="dedicated-c-block pr-5">
                                    <h3> THE PROGRAM </h3>
                                    <p> SpaceX’s SmallSat Rideshare Program will provide small satellite operators with regularly scheduled, dedicated Falcon 9 rideshare missions to sun synchronous orbit (SSO) for ESPA class payloads for as low as $1M per mission, which includes up to 200 kg of payload mass. </p>
                                </div>
                            </div>
                            <div className="col-sm-6 ">
                                <div className="dedicated-c-block pl-5">
                                    <h3> PAYLOADS </h3>
                                    <p>For payloads who run into development or production challenges leading up to launch, SpaceX will allow them to apply 100% of monies paid towards the cost of rebooking on a subsequent mission, subject to a 10% rebooking fee. </p>
                                </div>
                            </div>

                        </div>

                    </section>

                    <section className="outpast-block">
                        <h2 className="text-center"> OUR PAST LAUNCHES </h2>
                        <div className="row rowspace-28">
                            
                            {this.props.data.spacex.launchesPast.map((launch, index) => {
                                return <LaunchesCard key={index} details={launch} />
                            })}
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export const query = graphql`
  query {
    spacex {
      launchesPast(limit: 8) {
        mission_name
        launch_date_local
        links {
          article_link
          video_link
          wikipedia
          mission_patch_small
          mission_patch
        }
        rocket {
          rocket_name
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
        launch_site {
          site_name_long
        }
        launch_year
        mission_id
      }
    }
  }
`

export default IndexPage
