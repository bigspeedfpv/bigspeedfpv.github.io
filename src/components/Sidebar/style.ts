import styled, { css } from "styled-components"

export const Container = styled.div`
  position: fixed;
  margin: 15px;
  border-radius: 15px;
  top: ${props => props.scrolled ? `65px` : `0`};
  background-color: white;
  box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);

  width: 300px;

  border: solid #ccc 2px;

  transition: top 0.15s, opacity 0.15s;

  padding-left: 10px;
  padding-right: 10px;

  ${props => props.active || `opacity: 0`};

  display: flex;
  flex-direction: column;
`

export const Section = styled.span`
  font-size: 30px;
  font-weight: 700;
  margin: 5px;
  cursor: pointer;
`