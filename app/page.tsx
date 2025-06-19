'use client'
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
"D A I L I E S"
"Will generate 7 questions daily for you to practice a language of your choice"


import LanguageSelection from "./components/LanguageSelection";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="text-4xl font-semibold">Learn languages the right way</p>
      <p>
        Live daily feedback and practice with Dailies
      </p>
      <div className="flex flex-row gap-4">
        <Link href="/login"><Button>Start for free</Button></Link>
        <Button>Learn more</Button>
      </div>

      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardContent>Card Content</CardContent>
          <CardFooter>Card Footer</CardFooter>
        </CardHeader>
      </Card>


    </div>
  );
}
