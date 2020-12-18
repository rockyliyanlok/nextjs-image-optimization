import App from 'next/app'
import Head from 'next/head'
import GlobalStyle from '../styles/global'
import Layout from '../components/Layout'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Next.js Image Optimization</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx)

  return { ...appProps }
}

export default MyApp
