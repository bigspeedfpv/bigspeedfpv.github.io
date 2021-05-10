import axios from "axios"
import { GetStaticProps } from "next"
import Head from "next/head"
import React from "react"
import HomeBackground from "../components/Home/Background"
import HomeContent from "../components/Home/Content"
import { HomeContainer } from "../styles/Home"

const Home = (props: { b64: string }) => {
  return (
    <HomeContainer>
      <Head>
        <title>Home | bigspeed</title>
        <meta name="description" content="Homepage for bigspeed's projects and FPV." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <HomeBackground />

      <HomeContent logo={props.b64} />
    </HomeContainer>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (ctx) => {
  const b64 = await axios
    .get("https://github.com/bigspeedfpv.png", {
      responseType: "arraybuffer"
    })
    .then((res: any) => Buffer.from(res.data, "binary").toString("base64"))

  return {
    props: {
      b64: b64
    }
  }
}