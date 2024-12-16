import { auth, signIn, signOut } from "@/auth";
import axios from "axios";
import { error } from "console";
import { redirect } from "next/navigation";


export const postUser = async (user: any): Promise<void> => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const body = {
            name: user.name,
            email: user.email
        }
        const response = await axios.get(`${baseUrl}/api/users/email/${user.email}`);
        if(response.data && response.data.data){
            
        }
        const data = await axios.post(`${baseUrl}/api/users`, {
            ...body
        });
    } catch (e: any) {
        console.error("Error in signing in and posting")
    }
}


export const postBlog = async (blog: any, tags: any[], user: any): Promise<boolean> => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const userResponse = await axios.get(`${baseUrl}/api/users/email/${user.email}`);
        const userId = userResponse.data.data["_id"];
        const tagIds: any[] = [];
        for (const tag of tags) {
            const response = await axios.get(`${baseUrl}/api/tags/name/${tag}`);
            if (!response.data.data) {
                const newTag = {
                    name: tag
                }
                const data = await axios.post(`${baseUrl}/api/tags`, {
                    ...newTag
                });
                tagIds.push(data.data.data["_id"]);

            }
            else {
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
        const data = await axios.post(`${baseUrl}/api/blogs`, body,
            {
                headers: { 'Content-Type': 'multipart/form-data' }
            }
        );
        const blogs = userResponse.data.data.blogs || [];
        await axios.put(`${baseUrl}/api/users/${userId}`, {
            blogs: [...blogs, data.data.data["_id"]]
        });
    } catch (e: unknown) {
        console.log("Error", e);
        return false;
    } finally {
        return true;
    }
}

export const getBlogsForProfile = async (authorId: any): Promise<any[]> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const blogs = [];
    const response = await axios.get(`${baseUrl}/api/articles/authorId/${authorId}`);
    const articles = response.data.data;
    return articles;
}

export const getBlogs = async (): Promise<any> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${baseUrl}/api/articles`);
    if (!response.data.data) {
        return [];
    }
    return response.data.data;
}

export const getTags = async (): Promise<any> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${baseUrl}/api/tags`);
    return response.data.data;
}

export const getUserByEmail = async (email: string): Promise<any> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${baseUrl}/api/users/email/${email}`);
    return response.data.data;
}

export const getUserById = async (id: string): Promise<any> => {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await axios.get(`${baseUrl}/api/users/${id}`);
        return response.data.data;
}

export const getArticleById = async (id: string): Promise<any> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${baseUrl}/api/articles/${id}`);
    if (!response.data.data) {
        return [];
    }
    return response.data.data;
}

// utils/uploadToS3.ts

async function generatePresignedUrl(fileName: string, fileType: string) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-upload-url`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileName,
                fileType,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to get presigned URL');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting presigned URL:', error);
        throw error;
    }
}

export async function uploadToS3(file: File, type: 'image' | 'thumbnail') {
    try {
        // Get presigned URL from your backend
        const { uploadUrl, imageUrl } = await generatePresignedUrl(
            `${type}-${Date.now()}-${file.name}`,
            file.type
        );

        // Upload to S3 using presigned URL
        await fetch(uploadUrl, {
            method: 'PUT',
            body: file,
            headers: {
                'Content-Type': file.type,
            },
        });

        return imageUrl;
    } catch (error) {
        console.error('Error uploading to S3:', error);
        throw new Error('Failed to upload image');
    }
}

export async function getTagIdByName(name: string) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await axios.get(`${baseUrl}/api/tags/name/${name}`);
        if (!response.data.data) {
            return [];
        }
        return response.data.data[0]._id;

    }
    catch (e: any) {
        console.error("Error in getting tag Id by name");
    }
}

export async function postTags(tags: { name: string, category: string }[]): Promise<string[]> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const tagIds: string[] = [];
        for (const tag of tags) {
            if (!tag.name) {
                continue;
            }
            const existingTagResponse = await axios.get(`${baseUrl}/api/tags/name/${tag.name}`);
            if (existingTagResponse.data.data && existingTagResponse.data.data[0] && existingTagResponse.data.data[0]._id && tag.category === existingTagResponse.data.data[0].category) {
                tagIds.push(existingTagResponse.data.data[0]._id);
            }
            else {
                const response = await axios.post(`${baseUrl}/api/tags`, {
                    ...tag
                });
                if (response.data && response.data.data._id) {
                    tagIds.push(response.data.data._id);
                }
            }
        }
        return tagIds;
    } catch (error: any) {
        console.error("Error in posting tags in api", error);
        throw error;
    }
}

export async function putArticlePublic(blog:any,id:string){
   try{
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response  = await axios.put(`${baseUrl}/api/articles/${id}`,{
         ...blog,
    });
    if(!response.data && !response.data.data)return;
    return response.data.data;
    } 
    catch (error: any) {
        console.error("Error in posting tags in api", error);
        throw error;
    }
}

export async function postArticle(articleData:any){
    const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`,
        {
          ...articleData,
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data.data;
}

export async function putUser(userData:any,id:any){
    await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
        full_name: userData.full_name,
        email: userData.email,
        article_ids: [...userData.article_ids, id]
      });
}

getTagNameById

export async function getTagNameById(id: string) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await axios.get(`${baseUrl}/api/tags/${id}`);
        if (!response.data.data) {
            return "";
        }
        return response.data.data.name;
    }
    catch (e: any) {
        console.error("Error in getting tag name by id");
    }
}

export async function getBlogsByNumber(number: number) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await axios.get(`${baseUrl}/api/articles/number/${number}`);
        if (!response.data.data) {
            return [];
        }
        return response.data.data;
    }
    catch (e: any) {
        console.error("Error in getting blogs by number by id");
    }
}
