// @ts-ignore
import styled from "styled-components"

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  @media (orientation: portrait) {
    align-items: center;
  }
`

export const MenuItem = styled.a`
  color: white;

  font-size: 25px;
  font-weight: 200;

  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid white;
    font-weight: 400;
  }

  transition: border-bottom 0.2s, font-weight 0.2s;

  @media (orientation: landscape) {
    &::before {
      display: block;
      content: "${(props: any) => props.children}";
      font-weight: 400;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
  }
`