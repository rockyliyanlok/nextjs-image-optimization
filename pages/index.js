import {
  HtmlImg,
  NextjsImage,
  OptimizedImage
} from '../components/ImageComponents'
import Head from 'next/head'
import ImageList from '../components/ImageList'
import React from 'react'

const Index = ({ plugin }) => {
  const [subtitle, ImageComponent] = plugin === 'nextjs' ? [
    'Next.js Image', NextjsImage
  ] : plugin === 'optimized' ? [
    'Optimized Image', OptimizedImage
  ] : [
    'Html img', HtmlImg
  ]

  return (
    <>
      <Head>
        <title>{`Next.js Image Optimization - ${subtitle}`}</title>
      </Head>
      <ImageList ImageComponent={ImageComponent} />
    </>
  )
}

Index.getInitialProps = async ({ query }) => {
  const { plugin } = query

  return { plugin }
}

export default Index
