import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>It is concatenation of the first three letters of my two last names.</p>
        <p>
	  (This is a sample website - based on{' '}
          <a href="https://nextjs.org/learn">Next.js</a>.)
        </p>
      </section>
    </Layout>
  )
}
