import React from "react"
import Link from "next/link"
import Router from "next/router"
import { BoldErrorText, Description, ErrorContainer, ErrorText } from "../styles/Errors"

const Custom500 = () => {
  const boldGradient = "90deg, #ff0084 0%, #ff274e 50%, #ff5900 100%"

  return (
    <ErrorContainer>
      <ErrorText><BoldErrorText gradient={boldGradient}>500.</BoldErrorText> That's an error.</ErrorText>

      <Description>You can try <a onClick={() => Router.reload()}>refreshing</a>, going <Link href="/"><a>Home</a></Link>, or trying again later.</Description>
    </ErrorContainer>
  )
}

export default Custom500