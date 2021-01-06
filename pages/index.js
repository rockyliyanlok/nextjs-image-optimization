import Head from 'next/head'
import ImageList from '../components/ImageList'
import React from 'react'

const ImageComponent = ({ filename }) => (
  <img 
    className={'width-height--100p object-fit--cover'}
    alt={filename}
    src={`/img/${filename}.jpg`}
    width={1920}
    height={1080}
  />
)

const Index = () => {
  return (
    <>
      <Head>
        <title>Next.js Image Optimization - Html img</title>
      </Head>
      <ImageList ImageComponent={ImageComponent} />
    </>
  )
}

export default Index
