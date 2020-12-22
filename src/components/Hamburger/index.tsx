import React from "react"

import { Container, Bar1, Bar2, Bar3 } from "./style"

const Hamburger = ({ active, callback }: {active: boolean, callback: Function }) => {
  const handleClick = () => {
    callback()
  }
  
  return (
    <Container onClick={handleClick}>
      <Bar1 active={active} />
      <Bar2 active={active} />
      <Bar3 active={active} />
    </Container>
  )
}

export default Hamburger