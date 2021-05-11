// @ts-ignore
import styled from "styled-components"

export const HomeContentContainer = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: min(7.5vw, 75px);

  @media (orientation: portrait) {
    flex-direction: column;
    gap: min(5vh, 50px);
  }
`