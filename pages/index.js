import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Semiconductor Business Reviews</title>
      </Head>

      <header>
        {/* Add navigation menu here */}
      </header>

      <main>
        {/* Here you would fetch and map over your data to display the companies */}
        {/* You could use a library like SWR or axios to fetch data from an API */}
        {/* This is just a placeholder */}
        <h1>Welcome to Semiconductor Business Reviews</h1>
        <p>Under Construction</p>

        <Link href="/submit-review">
          <a>Submit a Review</a>
        </Link>
      </main>

      <footer>
        {/* Footer information */}
      </footer>
      
    </div>
  )
}
