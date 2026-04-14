import React from 'react'
import Link from 'next/link'

interface NavProps {
  currentPath: string
}

export const Nav: React.FC<NavProps> = ({ currentPath }) => {
  return (
    <nav className="flex gap-2 justify-between self-end max-w-full text-lg tracking-wide w-[419px] max-md:w-full max-md:text-sm max-md:gap-3">
      <Link
        href="/"
        className={`${currentPath === '/' ? 'text-white' : 'text-navItem'} hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:text-white`}
      >
        Home
      </Link>
      <Link
        href="/research"
        className={`${currentPath === '/research' ? 'text-white' : 'text-navItem'} hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:text-white`}
      >
        Research
      </Link>
      <Link
        href="/about"
        className={`${currentPath === '/about' ? 'text-white' : 'text-navItem'} hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:text-white`}
      >
        About
      </Link>
    </nav>
  )
}
