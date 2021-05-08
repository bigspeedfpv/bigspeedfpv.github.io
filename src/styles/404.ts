import styled from "styled-components"
import { Link } from "gatsby"

export const Container404 = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100vh;

  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`

export const Title404 = styled.span`
  font-size: 50px;
  margin: 25px;
  
  text-align: center;
`

export const Bold404 = styled.strong`
  font-weight: 700;

  display: inline-block;
  line-height: 47px;

  text-shadow: 3px 3px white, 3px -3px white, -3px 3px white, -3px -3px white;

  border-bottom: 4px solid transparent;

  border-image: linear-gradient(90deg, rgba(0,255,207,1) 0%, rgba(0,226,255,1) 100%);
  
  border-image-slice: 1;

  &&& {
    &::selection {
      text-shadow: none;
    }
  }
`

export const Desc404 = styled.span`
  font-size: 30px;
`

export const Link404 = styled(Link)``