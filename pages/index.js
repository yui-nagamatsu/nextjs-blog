import Link from 'next/link'
import Date from '../components/date'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Image from 'next/image'
import styles from '../components/layout.module.css'

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
    <div className={utilStyles.entire}>
      <Layout home>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={utilStyles.mainColumn}>
          <div className={utilStyles.category}>
            <h2 className={utilStyles.headingLg}>CATEGORY</h2>
            <ul>
              <li>
                <div className={utilStyles.categoryItem}>
                  <Link href="/posts/physiology">
                    <a className={utilStyles.categoryItem_a}>
                      <Image
                        priority
                        className={utilStyles.categoryImage}
                        src="/images/physiology-image.jpg"
                        height={200}
                        width={300}
                      />
                      <div className={utilStyles.categoryName}>
                        <p className={utilStyles.categoryNameE}>PHYSIOLOGY</p>
                        <p className={utilStyles.categoryNameJ}>生理学</p>
                      </div>
                    </a>
                  </Link> 
                </div>
              </li>
              <li>
                <div className={utilStyles.categoryItem}>
                  <Link href="/posts/biochemistry">
                    <a　className={utilStyles.categoryItem_a}>
                      <Image
                        priority
                        className={utilStyles.categoryImage}
                        src="/images/biochemistry-image.jpg"
                        height={200}
                        width={300}
                      />
                      <div className={utilStyles.categoryName}>
                        <p className={utilStyles.categoryNameE}>BIOCHEMISTRY</p>
                        <p className={utilStyles.categoryNameJ}>生化学</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </li>
              <li>
                <div className={utilStyles.categoryItem}>
                <Link href="/posts/english">
                    <a className={utilStyles.categoryItem_a}>
                    <Image
                        priority
                        className={utilStyles.categoryImage}
                        src="/images/english-image.jpg"
                        height={200}
                        width={300}
                      />
                      <div className={utilStyles.categoryName}>
                        <p className={utilStyles.categoryNameE}>ENGLISH</p>
                        <p className={utilStyles.categoryNameJ}>医学英語</p>
                      </div>
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
          <div className={utilStyles.backToHome}>
            <Link href="/">
              <a><i class="fas fa-home"></i> BACK TO HOME</a>
            </Link>
          </div>
        </div>
        </section>
      </Layout>
      <div className={utilStyles.sideMenu}>
        <ul>
          <li>
            <a className="" href="/">TOP</a>
          </li>
          <li>
            <a>CATEGORY</a>          
          </li>
          <li>
            <a className="">THE LATEST</a>
          </li>
        </ul>
      </div>
    </div>
  )
}