import Head from 'next/head'
import Link from 'next/link'

export default function Service () {
    return (
  <dev>
    <head>
      <title>service</title>
    </head>
    <main>
      <h1><center>Service Page</center></h1>
    </main>
    <div>
    <center>
    <Link href="/"><a>Home</a></Link> |
    <Link href="/service"><a>service</a></Link> |
    <Link href="/adout"><a>about</a></Link> |
    <Link href="/product/p001"><a>product</a></Link>
    </center>
    </div>
  </dev>
    )
  }