import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";


export function middleware(req:NextRequest){
    const res = NextResponse.next();
    res.headers.append('ACCESS-CONTROL-ALLOW-ORIGIN','*');
    auth();
    return res;
}

export const config = {
    matcher:['/api/:path*']
}