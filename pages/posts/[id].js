import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { getAllPostIds,getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }){
    return (
        <div className={utilStyles.entire}>
            <div className={utilStyles.mainColumn}>
                <Layout>
                    <Head>
                        <title>{postData.title}</title>
                    </Head>
                    <article>
                    <h2 className={utilStyles.headingXl}>{postData.title}</h2>
                    <div className={utilStyles.lightText}>
                        <Date dateString={postData. date} />     
                    </div>
                    <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
                    </article>
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

export async function getStaticPaths(){
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}