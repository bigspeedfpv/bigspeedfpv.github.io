// @ts-expect-error
import styled from "styled-components"
import Image from "next/image"

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoWrapper = styled.div`
  filter: drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.25));
`

export const NameLogo = styled(Image)`
  border-radius: 100%;
`

export const NameTitle = styled.span`
  font-size: 50px;
  font-weight: bold;

  filter: drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.25));
`
