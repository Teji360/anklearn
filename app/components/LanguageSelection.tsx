'use client'
//TODO most of this is wrong please fix.
import React from 'react';
import Image from 'next/image'; // Make sure you're using Next.js Image component
import { Button } from '@/components/ui/button';
import { useLanguage } from '../context/LanguageContext'; // Import the context hook

type LanguageBoxProps = {
  languageCode: string;
  languageName?: string; // Optional prop for language name
};

function LanguageBox({ languageCode, languageName }: LanguageBoxProps) {
  const { setTargetLanguage } = useLanguage(); // Use the context to get the function
  return (
    <div 
      className="h-10 w-10 bg-gray-100 rounded-md cursor-pointer space-y-2 "
      onClick={() => setTargetLanguage(languageCode)}>
      <img
        src={`https://flagsapi.com/${languageCode.toUpperCase()}/flat/64.png`}
        alt="Flag"
      />
      <p className="text-center text-sm">{languageName || languageCode.toUpperCase()}</p>
      {/* Display the language name or code */}

    </div>
  );
}

function LanguageSelection() {
  return (
    <div className="h-screen w-screen">
      Language Selection
      <div className="grid grid-cols-2 gap-4 p-4">
        <LanguageBox languageCode="us" languageName='English' />
        <LanguageBox languageCode="be" languageName='Dutch' />
        <LanguageBox languageCode="fr" languageName='French' />
        <LanguageBox languageCode="de" languageName='German' />
        <LanguageBox languageCode="es" languageName='Spanish' />
        <LanguageBox languageCode="it" languageName='Italian' />
        <LanguageBox languageCode="pt" languageName='Portuguese' />
        <LanguageBox languageCode="ru" languageName='Russian' />
      </div>
    </div>
  );
}



export default LanguageSelection;
