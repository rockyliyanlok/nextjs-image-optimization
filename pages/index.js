import {
  Grid,
  Row,
  Col
} from 'react-styled-flexboxgrid'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
`

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
        <meta name="theme-color" content="#FFFFFF"/>
      </Head>
      <Grid>
        <Row>
          <Col 
            xs={12} 
            sm={10} smOffset={1}
            md={8} mdOffset={2}
            lg={6} lgOffset={3}
          >
            <Wrapper>
              <div>Next.js image optimization</div>
            </Wrapper>
          </Col>
        </Row>
      </Grid>
    </>
  )
}

export default Index
