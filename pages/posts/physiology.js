import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function Physiology() {
    return (
        <div className={utilStyles.entire}>
            <div className={utilStyles.mainColumn}>
                <Layout>
                    <h2 className={utilStyles.headingLg}>PHYSIOLOGY</h2>
                </Layout>
                <div className={utilStyles.backToHome}>
                <Link href="/">
                    <a><i class="fas fa-home"></i> BACK TO HOME</a>
                </Link>
                </div>
            </div>
            <div className={utilStyles.sideMenu}>
                <ul>
                    <li>
                        <a className="" href="/">HOME</a>
                    </li>
                    <li>
                        <a className="">CATEGORY</a>
                    </li>
                </ul>
            </div>
      </div>
    )
  }