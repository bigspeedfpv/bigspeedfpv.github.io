import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { IntroContainer, BackgroundImage, Profile, Title } from "./style"

const Home = ({ children }) => {
  const data = useStaticQuery(query)

  const [loaded, setLoaded] = React.useState(false)



  return (
    <>
      <picture>
        <source type="image/webp" srcSet="background.webp" />
        <BackgroundImage src="background.png" alt="Website Background" onLoad={() => setLoaded(true)} loaded={loaded} />
      </picture>

      <IntroContainer>
        <Profile src={"data:image/png;base64, " + data.allProfile.edges[0].node.data} alt="Profile Picture" />
        <Title>bigspeed</Title>
      </IntroContainer>

      { children }
    </>
  )
}

export default Home

const query = graphql`
  query ProfilePhoto {
    allProfile {
      edges {
        node {
          data
        }
      }
    }
  }
`