import { NextRequest, NextResponse } from "next/server";
import { TranslationServiceClient } from "@google-cloud/translate";

// Initialize the Translation client
const translationClient = new TranslationServiceClient();

interface TranslationRequest {
    text: string;
    language: string;
}

export async function POST(request: NextRequest) {
    try {
        const { text, language } = await request.json() as TranslationRequest;

        if (!text || !language) {
            return NextResponse.json(
                { error: "Text and language are required" },
                { status: 400 }
            );
        }

        // Configure the translation request
        const translationRequest = {
            parent: `projects/${process.env.GOOGLE_CLOUD_PROJECT_ID}/locations/global`,
            contents: [text],
            mimeType: "text/plain",
            targetLanguageCode: language,
        };

        // Perform the translation
        const [response] = await translationClient.translateText(translationRequest);
        const translation = response.translations?.[0]?.translatedText;

        if (!translation) {
            throw new Error("No translation received");
        }

        return NextResponse.json({ translation });
    } catch (error) {
        console.error("Translation error:", error);
        return NextResponse.json(
            { error: "Failed to translate text" }, { status: 500 }
        );
    }
}