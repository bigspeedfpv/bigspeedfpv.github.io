import React from "react"
import Link from "next/link"
import { BoldErrorText, Description, ErrorContainer, ErrorText } from "../styles/Errors"

const Custom404 = () => {
  const boldGradient = "90deg, #00ffa3 0%, #00efe8 50%, #00d7ff 100%"

  return (
    <ErrorContainer>
      <ErrorText><BoldErrorText gradient={boldGradient} >404.</BoldErrorText> That's an error.</ErrorText>

      <Description>You can try going <Link href="/"><a>Home</a></Link>.</Description>
    </ErrorContainer>
  )
}

export default Custom404