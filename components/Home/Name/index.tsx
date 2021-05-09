import React from "react"
import Image from "next/image"
import { LogoWrapper, NameContainer, NameLogo, NameTitle } from "./style"

const Name = () => (
    <NameContainer>
        <LogoWrapper>
            <NameLogo
                src={"https://github.com/bigspeedfpv.png"}
                alt={"Logo"}
                width={150}
                height={150}
            />
        </LogoWrapper>

        <NameTitle>bigspeed</NameTitle>
    </NameContainer>
)

export default Name