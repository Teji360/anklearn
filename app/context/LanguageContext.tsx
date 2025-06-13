'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type LanguageContextType = {
    targetLanguage: string;
    nativeLanguage: string;
    setTargetLanguage: (language: string) => void;
    setNativeLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [targetLanguage, setTargetLanguage] = useState<string>('en');
    const [nativeLanguage, setNativeLanguage] = useState<string>('fr');

    return (
        <LanguageContext.Provider
            value={{
                targetLanguage,
                nativeLanguage,
                setTargetLanguage,
                setNativeLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

//Function to use the Langauge Context in components
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('use language must be used within language provider');
    return context;
}