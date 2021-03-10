import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'
import Image from 'next/image'

export default function English() {
    return (
        <div className={utilStyles.entire}>
            <div className={utilStyles.mainColumn}>
                <Layout>
                    <span className={utilStyles.categoryHeader}>
                        <h1 className={utilStyles.englishLetter}>ENGLISH</h1>
                    </span>
                </Layout>
                <div className={utilStyles.backToHome}>
                    <a className={utilStyles.backToHome_a} href="/">
                        <span>BACK TO HOME</span>
                    </a>
                </div>
            </div>
            <div className={utilStyles.sideMenu}>
                <ul>
                    <li>
                        <a className={utilStyles.btn} href="/">
                            <span>HOME</span>
                        </a>
                    </li>
                    <li>
                        <a className={utilStyles.btn} href="">
                            <span>CATEGORY</span>
                        </a>
                    </li>
                </ul>
            </div>
      </div>
    )
  }