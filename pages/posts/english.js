import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function English() {
    return (
        <div className={utilStyles.biochemistryEntire}>
            <Layout>
                <h2 className={utilStyles.headingLg}>ENGLISH</h2>
            </Layout>
            <div className={utilStyles.backToHome}>
            <Link href="/">
            <a><i class="fas fa-home"></i> BACK TO HOME</a>
            </Link>
            </div>
      </div>
    )
  }