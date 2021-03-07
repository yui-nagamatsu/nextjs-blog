import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'

export default function Physiology() {
    return (
        <div>
            <Layout home></Layout>
            <>
            <h2 className={utilStyles.headingLg}>生化学</h2>
            <p>
            <Link href="/">
                <a>Back to home</a>
            </Link>
            </p>
            </>
        </div>
    )
  }