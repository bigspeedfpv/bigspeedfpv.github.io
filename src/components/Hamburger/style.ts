import styled, { css } from "styled-components"

export const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-left: 10px;
`

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 6px 0;
  transition: 0.2s;
`

export const Bar1 = styled(Bar)`
  ${props => props.active && `
    transform: rotate(-45deg) translate(-6px, 6px);
  `}
`

export const Bar2 = styled(Bar)`
  ${props => props.active && `
    opacity: 0;
  `}
`

export const Bar3 = styled(Bar)`
  ${props => props.active && `
    transform: rotate(45deg) translate(-7px, -7px);
  `}
`