import { auth } from "@/auth";
import React from "react";

export default async function useSession() {
const session = await auth();
if(!session){
    return {user: null};
}
const user = session.user;
return {user : user};
}