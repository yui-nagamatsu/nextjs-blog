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
      </>
    )
  }