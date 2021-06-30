import Head from 'next/head'
import Link from 'next/link'

export default function Home () {
  return (
<dev>
  <head>
    <title>Index</title>
  </head>
  <main>
    <h1><center>index Page</center></h1>
    <center>
    <Link href="/"><a>Home</a></Link> |
    <Link href="/service"><a>service</a></Link> |
    <Link href="/adout"><a>about</a></Link> |
    <Link href="/product/p001"><a>product</a></Link>
    </center>
    
  </main>
</dev>
  )
} 