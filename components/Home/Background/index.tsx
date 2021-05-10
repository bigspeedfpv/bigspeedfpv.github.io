import React from "react"
import { BackgroundContainer, BackgroundImage } from "./style"

const HomeBackground = () => {
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
        visibility={loaded ? 100 : 0}
      />
    </BackgroundContainer>
  )
}

export default HomeBackground
