import React from "react"
import { BackgroundContainer, BackgroundImage } from "./style"

const Background = () => (
  <BackgroundContainer>
    <picture>
      <source
        type="image/webp"
        srcSet="/background.webp"
      />
      <BackgroundImage
        src="/background.png"
        alt="Background"
      />
    </picture>
  </BackgroundContainer>
)

export default Background
