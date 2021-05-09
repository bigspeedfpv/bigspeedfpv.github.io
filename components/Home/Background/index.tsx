import React from "react"
import { BackgroundContainer, BackgroundImage } from "./style"

const Background = () => {
  const [loaded, setLoaded] = React.useState(false)

  const bg = React.useRef()

  React.useEffect(() => {
    if ((bg.current as any).complete) setLoaded(true)
  }, [])

  return (
    <BackgroundContainer>
      <BackgroundImage 
        src={"/background.png"}
        alt={"Background"}
        ref={bg}
        onLoad={() => setLoaded(true)}
        visible={loaded}
      />
    </BackgroundContainer>
  )
}

export default Background