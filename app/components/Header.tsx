import Link from 'next/link'
import React from 'react'
import { Cog } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
//This is a header components for the language learning applocation

function Header() {
  return (
    <header className='flex flex-row colors-white space-x-5 items-center p-4 bg-gray-200 dark:bg-gray-800'>
        <Link href='/'><h1>Dailies</h1></Link>
        <h1>Readings</h1>
        <Cog className='cursor-pointer'/>
        <ModeToggle />

    </header>
  )
}

export default Header