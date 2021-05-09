import React from "react"
import { BackgroundContainer, BackgroundImage } from "./style"

const Background = () => {
  return (
    <BackgroundContainer>
      <BackgroundImage 
        src={"/background.png"}
        alt={"Background"}
      />
    </BackgroundContainer>
  )
}

export default Background