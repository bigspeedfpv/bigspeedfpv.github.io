import React from "react"

import { Container, Copyright, Github } from "./style"

const Footer = () => {
  return (
    <Container>
      <Copyright>© { new Date().getFullYear() } Andrew Brower (<Github href="https://github.com/bigspeedfpv/website">Source</Github>)</Copyright>
    </Container>
  )
}

export default Footer