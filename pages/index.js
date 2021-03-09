import Link from 'next/link'
import Date from '../components/date'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Image from 'next/image'

const name = 'yui'

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
              <h2 className={utilStyles.headingLg}>CATEGORY</h2>
              <ul>
                <li>
                  <div className={utilStyles.categoryItem}>
                    <Link href="/posts/physiology">
                      <a>
                        <Image
                          priority
                          className={utilStyles.categoryImage}
                          src="/images/physiology-image.jpg"
                          height={175}
                          width={260}
                        />
                        <p>PHYSIOLOGY</p>
                      </a>
                    </Link> 
                  </div>
                </li>
                <li>
                  <div className={utilStyles.categoryItem}>
                    <Link href="/posts/biochemistry">
                      <a>
                        <Image
                          priority
                          className={utilStyles.categoryImage}
                          src="/images/biochemistry-image.jpg"
                          height={175}
                          width={260}
                        />
                        <p>BIOCHEMISTRY</p>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className={utilStyles.categoryItem}>
                  <Link href="/posts/english">
                      <a>
                      <Image
                          priority
                          className={utilStyles.categoryImage}
                          src="/images/english-image.jpg"
                          height={175}
                          width={260}
                        />
                        <p>MEDICAL ENGLISH</p>
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className={utilStyles.theLatest}>
              <h2 className={utilStyles.headingLg}>THE LATEST</h2>
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