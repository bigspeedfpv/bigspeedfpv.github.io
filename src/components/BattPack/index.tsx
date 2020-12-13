import React from "react"

import { Container, Header, ComingSoon, Details, Phone, Description } from "./style"

const BattPack = () => {
  return (
    <Container>
      <Header>BattPack</Header>
      <ComingSoon>Coming Soon</ComingSoon>

      <Details>
        <picture>
          <source type="image/webp" srcset="battpack.webp" />
          <Phone src="battpack.png" alt="BattPack screenshot" />
        </picture>
        <Description><strong>BattPack</strong> is an iOS app I made with SwiftUI that allows you to more easily track your rechargeable batteries. Featuring a minimal UI, snappy animations, and cloud syncing, <strong>BattPack</strong> will ensure that you never lose track of your batteries again.</Description>
      </Details>
    </Container>
  )
}

export default BattPack