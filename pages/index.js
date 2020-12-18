import Head from 'next/head'
import ImageWrapper from '../components/ImageWrapper'
import React from 'react'
import styled from 'styled-components'

const HtmlImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Index = () => {
  return (
    <>
      <Head>
        <title>Next.js Image Optimization - Html img</title>
      </Head>
      {[...Array(10).keys()].map(index => {
        const filename = `landscape${('' + (index + 1)).padStart(3, '0')}`
        return (
          <ImageWrapper key={filename}>
            <HtmlImg 
              alt={filename}
              src={`/img/${filename}.jpg`}
            />
          </ImageWrapper>
        )
      })}
    </>
  )
}

export default Index
