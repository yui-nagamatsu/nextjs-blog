import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Yui'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
              <h1 className={styles.logo}>{name}</h1>
              <div className={styles.content}>
                <ul>
                  <li>
                    <a className="" href="/">HOME</a>
                  </li>
                  <li className={styles.blogMenu}>
                    <a>BLOG</a>
                    <ul className={styles.submenu}>
                      <li><a>生理学</a></li>
                      <li><a>生化学</a></li>
                      <li><a>医学英語</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className="">ABOUT</a>
                  </li>
                </ul>
              </div>
          </>
        ) : (
          <>
            <h1 className={styles.logo}>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h1>
            <div className={styles.content}>
                <ul>
                  <li>
                    <a className="" href="/">HOME</a>
                  </li>
                  <li className={styles.blogMenu}>
                    <a>BLOG</a>
                    <ul className={styles.submenu}>
                      <li><a>生理学</a></li>
                      <li><a>生化学</a></li>
                      <li><a>医学英語</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className="">ABOUT</a>
                  </li>
                </ul>
              </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <div className={styles.footer}>
        <p>© Copyright 2021 Yui All rights reserved.</p>
      </div>
    </div>
  )
}