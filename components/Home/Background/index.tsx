import React from "react"
import { BackgroundContainer, BackgroundImage } from "./style"

const Background = () => {
  const [loaded, setLoaded] = React.useState(false)
  
  const handleLoad = (e: any) => {
    if (e.target.srcset) {
      setLoaded(true)
    }
  }

  return (
    <BackgroundContainer>
      <BackgroundImage
        src={"/background.png"}
        alt={"Background"}
        layout={"fill"}
        objectFit={"cover"}
        onLoad={handleLoad}
        visible={loaded}
      />
    </BackgroundContainer>
  )
}

export default Background
