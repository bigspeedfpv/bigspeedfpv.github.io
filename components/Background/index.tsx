import React from "react"
import { BackgroundContainer, BackgroundImage } from "./style"

const Background = () => {
  return (
    <BackgroundContainer>
      <BackgroundImage 
        src={"/background.jpg"}
        alt={"Background"}
        layout={"fill"}
        objectFit={"cover"}
      />
    </BackgroundContainer>
  )
}

export default Background