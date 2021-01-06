import Head from 'next/head'
import Image from 'next/image'
import ImageList from '../components/ImageList'
import React from 'react'

const ImageComponent = ({ filename }) => (
  <Image 
    alt={filename}
    src={`/img/${filename}.jpg`}
    objectFit="cover"
    width={1920}
    height={1080}
  />
)

const NextImage = () => {
  return (
    <>
      <Head>
        <title>Next.js Image Optimization - Next.js Image</title>
      </Head>
      <ImageList ImageComponent={ImageComponent} />
    </>
  )
}

export default NextImage
