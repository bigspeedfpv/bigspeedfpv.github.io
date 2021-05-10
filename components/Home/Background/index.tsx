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
      <picture>
        <source
          type="image/webp"
          srcSet="/background.webp"
        />
        <BackgroundImage
          src="/background.png"
          alt="Background"
          ref={bg}
          onLoad={() => setLoaded(true)}
          visible={loaded}
        />
      </picture>
    </BackgroundContainer>
  )
}

export default Background
