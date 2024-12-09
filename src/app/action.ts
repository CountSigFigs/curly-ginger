'use server';

import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

export async function validateSiteEntry(passcode: string){
    if (passcode === process.env.SITE_ENTRY_CODE) {
        const fifteenMinutes = 15 * 60 * 1000;
        const cookieStore = await cookies()
        cookieStore.set('entryGranted', 'true', { expires: Date.now() + fifteenMinutes, sameSite:'strict'})
        redirect('/dashboard/login');
    }
}
