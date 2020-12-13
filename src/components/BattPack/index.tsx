import React from "react"

import { Container, Header, ComingSoon, Details, Phone, Description } from "./style"

const BattPack = () => {
  return (
    <Container>
      <Header>BattPack</Header>
      <ComingSoon>Coming Soon</ComingSoon>

      <Details>
        <Phone src="battpack.png" />
        <Description><strong>BattPack</strong> is an iOS app made with SwiftUI that allows you to more easily track your rechargeable batteries. Featuring a minimal UI, snappy animations, and cloud syncing, <strong>BattPack</strong> will ensure that you never lose track of your batteries again.</Description>
      </Details>
    </Container>
  )
}

export default BattPack
