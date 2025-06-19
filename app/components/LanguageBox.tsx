import { useLanguage } from '../context/LanguageContext';

type LanguageBoxProps = {
    languageCode: string;
    languageName?: string; // Optional prop for language name
};

function LanguageBox({ languageCode, languageName }: LanguageBoxProps) {
    const { setTargetLanguage } = useLanguage(); // Use the context to get the function
    return (
        <div
            className="h-10 w-10 bg-gray-100 rounded-md cursor-pointer space-y-2 ">
            <img
                src={`https://flagsapi.com/${languageCode.toUpperCase()}/flat/64.png`}
                alt="Flag"
            />
        </div>
    );
}

export default LanguageBox;