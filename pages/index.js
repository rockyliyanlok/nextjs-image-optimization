import Head from 'next/head'
import React from 'react'

const Index = () => {
  return (
    <>
      <Head>
        <title>Next.js Image Optimization</title>
        <meta name="Description" content="Build an application to explore Next.js 10 image optimization."></meta>

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#317EFB"/>
      </Head>
      <div>
        <figcaption>{'Simple <img> tag'}</figcaption>
        <img
          src="/img/golden_retriever.jpg"
          width="720"
          height="480"
          alt="Golden Retriever"
        ></img>
      </div>
    </>
  )
}

export default Index
