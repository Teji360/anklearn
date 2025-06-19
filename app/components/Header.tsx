'use client'

import Link from 'next/link'
import React from 'react'
import { Cog } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import { useLanguage } from '../context/LanguageContext'
import LanguageBox from './LanguageBox'
//This is a header components for the language learning applocation

function Header() {
  const { targetLanguage, nativeLanguage } = useLanguage();
  return (
    <header className='flex flex-row colors-white space-x-5 items-center p-4 bg-gray-200 dark:bg-gray-800'>
        <Link href='/'><h1>Dailies</h1></Link>
        <h1>Readings</h1>
        <Link href='settings'><Cog className='cursor-pointer'/></Link>
        <LanguageBox languageCode={targetLanguage} languageName={targetLanguage} />
        <ModeToggle />      
    </header>
  )
}

export default Header