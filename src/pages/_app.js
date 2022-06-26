import '../../styles/globals.css'
import Head from 'next/head'
import Header from '../../components/heder'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header>
        <title> Jefferson | Dev</title>
       </Header>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
