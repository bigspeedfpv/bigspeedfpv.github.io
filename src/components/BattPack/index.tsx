import React from "react"

import { Container, Header, ComingSoon, Details, Preview, Description } from "../Showcase/style"

const BattPack = ({ innerRef }) => {
  return (
    <Container ref={innerRef}>
      <Header>BattPack</Header>
      <ComingSoon>Coming Soon</ComingSoon>

      <Details>
        <picture>
          <source type="image/webp" srcSet="battpack.webp" />
          <Preview src="battpack.png" alt="BattPack screenshot" />
        </picture>
        <Description><strong>BattPack</strong> is an iOS app made with SwiftUI that allows you to more easily track your rechargeable batteries. Featuring a simple UI, snappy animations, and cloud syncing, <strong>BattPack</strong> will ensure that you never lose track of your batteries again.</Description>
      </Details>
    </Container>
  )
}

export default BattPack
