import React from 'react'

export default function Green_rounded_btn({ children, onClick, className }) {
    return (
        <button onClick={onClick} className={`green_rounded_btn ${className}`} >{children}</button>
    )
}
