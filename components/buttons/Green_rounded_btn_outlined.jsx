import React from 'react'
import Link from 'next/link'

export default function Green_rounded_btn_outlined({ children, href, className }) {
    return (
        <Link href={href} passHref><a ><p className={`green_rounded_btn_outlined ${className}`}>{children}</p></a></Link>
    )
}
