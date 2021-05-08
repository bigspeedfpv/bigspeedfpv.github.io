import styled, { css } from "styled-components"

export const HomeContainer = styled.div`
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
`

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  margin: 0;
  
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  filter: brightness(80%);

  position: absolute;
  left: 0;
  top: 0;

  opacity: ${(props: any) => props.loaded ? 100 : 0};
  transition: opacity 0.75s;
`

export const Profile = styled.img`
  width: 150px;
  height: 150px;

  border-radius: 100%;
  border: none;

  box-shadow: 0px 10px 21px 0px rgba(0,0,0,0.25);
`

export const Title = styled.span`
  font-size: 65px;
  font-weight: 700;
  color: white;

  margin-left: 25px;
  
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`