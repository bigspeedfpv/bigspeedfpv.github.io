import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { HeaderContainer, ProfileImage, HeaderTitle, IntroContainer, BackgroundImage, Arrow, Profile, Title } from "./style"

import BattPack from "./BattPack"
import Footer from "./Footer"
import Hamburger from "./Hamburger"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const data = useStaticQuery(query)

  const [scrolled, setScrolled] = React.useState(false)
  const [menuActive, setMenuActive] = React.useState(false)
  
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

  const toggleMenu = () => {
    setMenuActive(!menuActive)
    console.log(menuActive)
  }

  const introRef = React.useRef(null)
  const battpackRef = React.useRef(null)

  const scrollToHome = () => {
    introRef.current.scrollIntoView()
  }

  const scrollToBattpack = () => {
    battpackRef.current.scrollIntoView()
  }

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <Hamburger active={menuActive} callback={toggleMenu} />
        <ProfileImage src={"data:image/png;base64, " + data.allProfile.edges[0].node.data} alt="Profile Picture" />
        <HeaderTitle>bigspeed</HeaderTitle>
      </HeaderContainer>

      <picture>
        <source type="image/webp" srcSet="background.webp" />
        <BackgroundImage src="background.png" alt="Website Background" />
      </picture>

      <Arrow />

      <IntroContainer ref={introRef}>
        <Profile src={"data:image/png;base64, " + data.allProfile.edges[0].node.data} alt="Profile Picture" />
        <Title>bigspeed</Title>
      </IntroContainer>

      <Sidebar active={menuActive} scrolled={scrolled}>
        <div onClick={scrollToHome}>Home</div>
        <div onClick={scrollToBattpack}>BattPack</div>
      </Sidebar>

      <BattPack innerRef={battpackRef} />
      <Footer />
      { children }
    </>
  )
}

export default Layout

const query = graphql`
  query ProfilePhoto {
    allProfile {
      edges {
        node {
          data
        }
      }
    }
  }
`