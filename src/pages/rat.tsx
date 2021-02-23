import React from "react"
import { Background, Container, RateliusTitle } from "../styles/rat"

const Rat = () => {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <>
      <Container>
        <Background src="/rat.gif" onLoad={() => setLoaded(true)} visible={loaded} />
      </Container>
      <Container>
        <RateliusTitle>my boy ratelius is an absolute unit so he takes a sec to load</RateliusTitle>
      </Container>
    </>
  )
}

export default Rat