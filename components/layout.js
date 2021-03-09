import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'yui'
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous" />
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
      <div className={styles.backToHome}>
        <Link href="/">
          <a><i class="fas fa-home"></i> BACK TO HOME</a>
        </Link>
      </div>
    </div>
  )
}