import React from "react"
import { LogoWrapper, NameContainer, NameLogo, NameTitle } from "./style"

const Name = (props: { src: string }) => (
  <NameContainer>
    <LogoWrapper>
      <NameLogo
        src={`data:image/png;base64, ${props.src ?? ""}`}
        alt={"Logo"}
        width={150}
        height={150}
      />
    </LogoWrapper>

    <NameTitle>bigspeed</NameTitle>
  </NameContainer>
)

export default Name