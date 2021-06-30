import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

const dynamicroute = () => {
    const router = useRouter()
    const pathData = router.query
    return (
    <h1 style={{ color: "blueviolet", textAlign: "center" }}>
    dynamicroute name: {pathData.dynamicroute}<br/>
    code: {pathData.code}
    </h1>
    )
   }
   export default dynamicroute