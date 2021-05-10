// @ts-expect-error
import styled from "styled-components"
import Image from "next/image"

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
`

export const BackgroundImage = styled(Image)`
  filter: brightness(75%) blur(6px);
  transform: scale(1.2);

  opacity: ${(props: any) => props.visible ? 100 : 0};
  transition: opacity 0.5s;
`
