import Link from 'next/link'

export default function Category() {
    return (
      <>
        <h2>Category</h2>
        <p>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </p>
        <div className={utilStyles.sideMenu}>
            <ul>
                <li>
                    <a className="" href="/">HOME</a>
                </li>
                <li>
                    <a>CATEGORY</a>          
                </li>
            </ul>
        </div>
      </>
    )
  }