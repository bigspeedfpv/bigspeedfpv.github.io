import styled, { css } from "styled-components"

export const Navbar = styled.div`
  ${(scrolled) => css`
    opacity: ${scrolled ? 0 : 1};
  `};
`

export const HeaderContainer = styled.div`
  display: flex;
  height: 65px;
  
  align-items: center;
  
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 2
`

export const TranslucentBG = styled.div`
  width: 100%;
  height: 65px;

  background-color: white;
  opacity: 75%;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(25px);

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1
`

export const ProfileImage = styled.img`
  border: 5px solid white;
  border-radius: 100%;

  box-shadow: 0px 10px 21px 0px rgba(0,0,0,0.3);
  -webkit-box-shadow: 0px 10px 21px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 10px 21px 0px rgba(0,0,0,0.3);

  height: 50px;
  width: 50px;

  margin: 10px;
`

export const HeaderTitle = styled.span`
  font-size: 35px;
  font-weight: 700;

  margin: 10px;
  margin-left: 0px;
`

export const IntroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  postion: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;

  position: fixed;
  left: 0;
  top: 0;
  z-index: -10;

  filter: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a' x='0' y='0' width='1' height='1'%3E%3CfeGaussianBlur stdDeviation='7.5' result='b'/%3E%3CfeMorphology operator='dilate' radius='4'/%3E %3CfeMerge%3E%3CfeMergeNode/%3E%3CfeMergeNode in='b'/%3E%3C/feMerge%3E%3C/filter%3E%3C/svg%3E#a");
`

export const Profile = styled.img`
  width: 150px;
  height: 150px;

  border-radius: 100%;
  border: 8px solid white;

  box-shadow: 0px 10px 21px 0px rgba(0,0,0,0.5);
  -webkit-box-shadow: 0px 10px 21px 0px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px 10px 21px 0px rgba(0,0,0,0.5);
`

export const Title = styled.span`
  font-size: 65px;
  font-weight: 700;
  color: white;

  margin-left: 25px;
  
  text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.45);
`