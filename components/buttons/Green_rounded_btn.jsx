import React from 'react'
import Link from 'next/link'

export default function Green_rounded_btn({ children, href, className }) {
    return (
        <Link href={href ?? "#"} passHref><a className={`green_rounded_btn whitespace-nowrap ${className}`}>{children}</a></Link>
    )
}
