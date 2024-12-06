'use server';

import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

export async function validateSiteEntry(passcode: string){
    if (passcode === process.env.SITE_ENTRY_CODE) {
        const fifteenMinutes = 15 * 60 * 1000;

        cookies().set('entryGranted', 'true', { expires: Date.now() + fifteenMinutes, sameSite:'none' })
        redirect('/dashboard/login');
    }
}
