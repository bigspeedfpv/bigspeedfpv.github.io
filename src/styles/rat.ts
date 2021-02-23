import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: black;
  
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  position: absolute;
  left: 0;
  top: 0;
`

export const Background = styled.img`
  min-height: 100%;
  min-width: 100%;

  opacity: ${(props: { visible: boolean }) => props.visible ? `1` : `0`};

  transition: opacity 0.5s;

  z-index: 10;
`

export const RateliusTitle = styled.span`
  color: white;

  font-size: 50px;
  text-align: center;

  font-weight: 700;
  letter-spacing: -0.1rem;

  font-family: sans-serif;

  margin: 50px;
`