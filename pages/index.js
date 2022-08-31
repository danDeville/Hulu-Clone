import Head from 'next/head'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Results from './components/Results'
import requests from '../utils/requests'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu | Stream TV and Movies Live and Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* NavBar */}
      <NavBar />

      {/* Main */}
      <Results results={results}/>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const genre = context.query.genre

//   const request = await fetch(
//     `https://api.themoviedb.org/3${
//       requests[genre]?.url || requests.fetchTrending.url
//     }`
//   ).then(res => res.json())

//   return {
//     props:{
//       results: request.results,
//     }
//   }
// }

export const getServerSideProps = async (context) => {
  try {
    const genre = context.query.genre
    const request = await fetch(`https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`)
    const response = await request.json()

    return {
      props:{
        results: response.results,
      }
    }
  }
  catch(error) {
    console.error(error)
  }
}
