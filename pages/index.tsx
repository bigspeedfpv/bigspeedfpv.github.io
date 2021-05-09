import Head from 'next/head'
import React from 'react'
import Background from '../components/Background'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | bigspeed</title>
        <meta name="description" content="Homepage for bigspeed's projects and FPV." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <Background />
    </>
  )
}
