// @ts-expect-error
import styled from "styled-components"
import Image from "next/image"

export const BackgroundContainer = styled.div`
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: -15px;
  left: -15px;
  bottom: -15px;
  right: -15px;
`

export const BackgroundImage = styled(Image)`
  filter: brightness(75%) blur(6px);

  opacity: ${(props: any) => props.visibility};
  transition: opacity 0.5s;
`
