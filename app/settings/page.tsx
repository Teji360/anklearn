'use client'
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
export default function Home() {

  const [language, setLanguage] = useState("en");
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] 
    justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-xl font-bold">Select a language</h1>
      
    </div>
  );
}