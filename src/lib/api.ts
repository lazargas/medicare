import { auth, signIn } from "@/auth";
import axios from "axios";

export const postUser = async (user:any): Promise<void> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const body = {
        name: user.name,
        email: user.email,
        image: user.image,
        blogs: []
    } 
    const data = await axios.post(`${baseUrl}/api/users`,{
     ...body
    });
}

