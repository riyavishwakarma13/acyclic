import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div
            id="home"
            className=" hero-image select-none relative isolate flex  h-screen flex-col items-center justify-center gap-5"
        >
            <h1 className="neon">Oops Page Not Found!</h1>
            <Link href={"/"} className="text-white text-center bg-secondary px-4 rounded-full py-3  text-lg  font-semibold">
                Go Back Home
            </Link>
        </div>
    )
}

export default NotFound