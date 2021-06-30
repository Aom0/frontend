import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const Product = () => {
    const router = useRouter()
    const pathData = router.query
    return (
        <div>
            <h1>
                <center>
                Product: {pathData.id}<br/>
                </center>
         </h1>
         <br/>
    <center>
    <Link href="/"><a>Home</a></Link> |
    <Link href="/service"><a>service</a></Link> |
    <Link href="/adout"><a>about</a></Link> |
    <Link href="/product/p001"><a>product</a></Link>
    </center>
        </div>

    )
   }
   export default Product