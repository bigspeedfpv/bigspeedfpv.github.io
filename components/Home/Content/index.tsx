import React from "react"
import Divider from "./Divider"
import Menu from "./Menu"
import Name from "./Name"
import { HomeContentContainer } from "./style"

const HomeContent = (props: { logo: string }) => (
  <HomeContentContainer>
    <Name src={props.logo} />
    
    <Divider />

    <Menu />
  </HomeContentContainer>
)

export default HomeContent