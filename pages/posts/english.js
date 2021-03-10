import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function English() {
    return (
        <div className={utilStyles.entire}>
            <div className={utilStyles.mainColumn}>
                <Layout>
                    <h2 className={utilStyles.headingLg}>ENGLISH</h2>
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