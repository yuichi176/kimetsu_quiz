import Layout from '../components/Layout'
import '../assets/reset.css'
import '../assets/style.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
