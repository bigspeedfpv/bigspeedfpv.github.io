// @ts-expect-error
import styled from "styled-components"

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

export const BackgroundImage = styled.img`
  filter: brightness(75%) blur(6px);
  transform: scale(1.2);

  min-width: 100vw;
  min-height: 100vh;
  object-fit: cover;
`
