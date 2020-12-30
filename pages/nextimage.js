import Head from 'next/head'
import Image from 'next/image'
import ImageWrapper from '../components/ImageWrapper'
import React from 'react'

const NextImage = () => {
  return (
    <>
      <Head>
        <title>Next.js Image Optimization - Next.js Image</title>
      </Head>
      {[...Array(10).keys()].map(index => {
        const filename = `landscape${('' + (index + 1)).padStart(3, '0')}`
        return (
          <ImageWrapper key={filename}>
            <Image 
              alt={filename}
              src={`/img/${filename}.jpg`}
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
        )
      })}
    </>
  )
}

export default NextImage
