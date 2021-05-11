// @ts-ignore
import styled from "styled-components"

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
`

export const ErrorText = styled.span`
  font-size: min(75px, 7.5vmin);
`

export const BoldErrorText = styled(ErrorText)`
  font-weight: bold;
  background: linear-gradient(${(props: any) => props.gradient});
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`

export const Description = styled.span`
  text-align: center;
  font-size: min(45px, 4.5vmin);

  max-width: 1000px;
`