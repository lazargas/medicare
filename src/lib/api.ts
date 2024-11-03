import { auth, signIn, signOut } from "@/auth";
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


export const postBlog = async (blog:any,tags:any[],user:any): Promise<boolean> => {
    try{
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const userResponse = await axios.get(`${baseUrl}/api/users/email/${user.email}`);
        const userId = userResponse.data.data["_id"];
        const tagIds:any[] = [];
        for(const tag of tags){
            const response = await axios.get(`${baseUrl}/api/tags/name/${tag}`);
            if(!response.data.data){
                const newTag = {
                    name: tag
                }
                const data = await axios.post(`${baseUrl}/api/tags`,{
                    ...newTag
                });
                tagIds.push(data.data.data["_id"]);
            
            }
            else{
                tagIds.push(response.data.data["_id"]);
            }
        } 
        const body = new FormData();
        body.append('thumbnail', blog.thumbnail);
        body.append('title', blog.title);
        body.append('content', blog.content);
        body.append('tags', JSON.stringify(tagIds));
        body.append('author_id', userId);
        body.append('views', '0');
        body.append('createdAt', Date.now().toString());
        body.append('updatedAt', Date.now().toString());
        const data = await axios.post(`${baseUrl}/api/blogs`,body,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        );
        const blogs = userResponse.data.data.blogs || [];
        await axios.put(`${baseUrl}/api/users/${userId}`, {
            blogs: [...blogs, data.data.data["_id"]]
        });
    }catch(e:unknown){
        console.log("Error",e);
        return false;
    }finally{
        return true;
    }
}

export const getBlogs = async (): Promise<any> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${baseUrl}/api/blogs`);
    return response.data.data;
}

export const getTags = async (): Promise<any> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${baseUrl}/api/tags`);
    return response.data.data;
}

