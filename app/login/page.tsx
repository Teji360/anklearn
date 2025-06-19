'use client';

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import React from 'react';
//Going to start adding logic for login here
export default function LoginPage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
        <Card className="p-10 mt-[30vh] flex text-center">
            <CardHeader className="text-lg font-semibold">Welcome to Dailies</CardHeader>
            <CardContent>
                <p>
                    Login to your account to get started
                </p>
            </CardContent>
            <Button>Continue with Google</Button>
            <Button>Continue with Email</Button>
        </Card>
    </div>
  );
}
