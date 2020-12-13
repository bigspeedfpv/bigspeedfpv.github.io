import styled, { css } from "styled-components"

export const Container = styled.div`
  width: 100%;

  background: white;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(220,220,220,1) 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.h1`
  font-size: 50px;
  font-weight: 700;
`

export const ComingSoon = styled.button`
  width: 40vw;
  max-width: 200px;
  height: 50px;

  font-size: 20px;

  border-radius: 15px;
  border: none;

  background-color: rgba(151, 177, 219, 1);
  color: white;

  -webkit-box-shadow: 0px 6px 12px 0px rgba(151,177,219,0.4); 
  box-shadow: 0px 6px 12px 0px rgba(151,177,219,0.4);
`

export const Details = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Phone = styled.img`
  height: 65vh;
`

export const Description = styled.span`
  width: 90vw;
  max-width: 450px;
  font-size: 25px;

  margin-left: 100px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 50px;
    text-align: center;
  }
`