import React from "react"

import { Container, Copyright, Github } from "./style"

const Footer = () => {
  return (
    <Container>
      <Copyright>© 2020 Andrew Brower (<Github href="https://github.com/bigspeedfpv/website">Source</Github>)</Copyright>
    </Container>
  )
}

export default Footer