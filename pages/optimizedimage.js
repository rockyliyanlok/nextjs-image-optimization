import _get from 'lodash/get'
import _isNil from 'lodash/isNil'
import Head from 'next/head'
import ImageList from '../components/ImageList'
import React from 'react'

const ImageComponent = ({ filename }) => (
  <img 
    className={'width-height--100p object-fit--cover'}
    alt={filename}
    src={require(`../public/img/${filename}.jpg?resize&size=1920&format=webp`)}
    width={1920}
    height={1080}
  />
)

const NextImage = () => {
  return (
    <>
      <Head>
        <title>Next.js Image Optimization - Optimized Image</title>
      </Head>
      <ImageList ImageComponent={ImageComponent} />
    </>
  )
}

export default NextImage
