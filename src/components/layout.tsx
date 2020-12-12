import React from "react"

import { Navbar, HeaderContainer, ProfileImage, HeaderTitle, IntroContainer, BackgroundImage, Profile, Title } from "./style"

import BattPack from "./BattPack"

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = React.useState(false)
  
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight / 5 * 3 - 20;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <Navbar scrolled={scrolled} >
        <HeaderContainer>
          <ProfileImage src="me.jpg" />
          <HeaderTitle>bigspeed</HeaderTitle>
        </HeaderContainer>
      </Navbar>

      <BackgroundImage src="background.jpg" />

      <IntroContainer>
        <Profile src="me.jpg" />
        <Title>bigspeed</Title>
      </IntroContainer>

      <BattPack />
      { children }
    </>
  )
}

export default Layout
