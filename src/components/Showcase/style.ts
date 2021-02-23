import styled, { css } from "styled-components"

export const Container = styled.div`
  width: 100%;
  padding: 50px;

  background: white;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(220,220,220,1) 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin-top: -40px;
`

export const Header = styled.span`
  font-size: 50px;
  font-weight: 700;
`

const Button = styled.button`
  width: 40vw;
  max-width: 200px;
  height: 50px;

  font-weight: 700;

  font-size: 20px;

  margin: 25px;

  border-radius: 15px;
  border: none;

  text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`

export const ComingSoon = styled(Button)`
  background-color: rgba(200, 200, 200, 1);
  color: white;

  box-shadow: 0px 7px 15px 0px rgba(0, 0, 0, 0.15);
`

export const Details = styled.div`
  display: flex;
  margin-top: 25px;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Preview = styled.img`
  height: auto;
  max-height: 650px;
  width: auto;
  max-width: 90vw;
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
