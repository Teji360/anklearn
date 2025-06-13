'use client'
//TODO most of this is wrong please fix.
import React from 'react';
import Image from 'next/image'; // Make sure you're using Next.js Image component

type LanguageBoxProps = {
  languageCode: string;
};

function LanguageBox({ languageCode }: LanguageBoxProps) {
  return (
    <div className="h-10 w-10 bg-gray-100 rounded-md">

    </div>
  );
}

function LanguageSelection() {
  return (
    <div className="h-screen w-screen">
      Language Selection
      <div className="grid grid-cols-2 gap-4 p-4">
        <LanguageBox languageCode="en" />
      </div>
    </div>
  );
}



export default LanguageSelection;
