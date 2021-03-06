import Link from 'next/link'
import Date from '../components/date'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Image from 'next/image'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here 
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I'm Yui.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
      */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.category}>
          <h2 className={utilStyles.headingLg}>Category</h2>
          <ul>
            <li>
              <a href="">
                <Image
                  priority
                  src="/images/physiology-image.jpg"
                  height={144}
                  width={144}
                />
                <p>生理学</p>
              </a> 
            </li>
            <li>
              <a href="">
                <Image
                  priority
                  src="/images/biochemistry-image.jpg"
                  height={144}
                  width={144}
                />
                <p>生化学</p>
              </a>
            </li>
            <li>
              <a href="">
                <p>医学英語</p>
              </a>
            </li>
          </ul>
        </div>
        <div className={utilStyles.theLatest}>
          <h2 className={utilStyles.headingLg}>The Latest</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}