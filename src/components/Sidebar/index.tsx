import React from "react"

import { Container, Section } from "./style"

const Sidebar = ({ active, scrolled, children }: { active: boolean, scrolled: boolean, children: any }) => {
  return (
    <Container active={active} scrolled={scrolled}>
      {React.Children.map(children, child => (
        <Section>
          { child }
        </Section>
      ))}
    </Container>
  )
}

export default Sidebar