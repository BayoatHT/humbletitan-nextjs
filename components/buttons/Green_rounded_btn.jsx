import React from 'react'
import Link from 'next/link'

export default function Green_rounded_btn({ children, href, className }) {
    return (
        <Link href={href ?? "#"} passHref  ><a> <p className={`green_rounded_btn ${className}`} >{children}</p> </a></Link>
    )
}
