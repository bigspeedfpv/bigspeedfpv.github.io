import Head from 'next/head'
import { GetStaticProps } from "next"
import React from 'react'
import Background from '../components/Home/Background'
import Name from '../components/Home/Name'
import axios from 'axios'
import { HomeContainer } from '../styles/Home'

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Home | bigspeed</title>
        <meta name="description" content="Homepage for bigspeed's projects and FPV." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <Background />

      <Name />
    </HomeContainer>
  )
}