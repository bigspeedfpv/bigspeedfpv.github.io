import React from "react"
import SEO from "../components/seo"
import { Background, Container, RateliusTitle } from "../styles/rat"

const Rat = () => {
  const [loaded, setLoaded] = React.useState(false)

  const ratGif = React.useRef()

  React.useEffect(() => {
    if ((ratGif.current as any).complete) setLoaded(true)
  })
  
  return (
    <>
      <SEO title="Home of the Ratelius" />
      <Container>
        <Background src="/rat.gif" onLoad={() => setLoaded(true)} visible={loaded} ref={ratGif} />
      </Container>
      <Container>
        <RateliusTitle>my boy ratelius is an absolute unit so he takes a sec to load</RateliusTitle>
      </Container>
    </>
  )
}

export default Rat