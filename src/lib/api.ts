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
        if (response.data && response.data.data) {
              
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

// export const getBlogsForProfile = async (authorId: any): Promise<any[]> => {
//     const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//     const response = await axios.get(`${baseUrl}/api/articles/authorId/${authorId}`);
//     const articles = response.data.data;
//     return articles;
// }

interface PaginatedResponse {
    success: boolean;
    data: any[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  }
  
  export const getBlogsForProfile = async (
    authorId: string,
    options: {
      page?: number;
      limit?: number;
      fields?: string[];
    } = {}
  ): Promise<any[]> => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const { page = 1, limit = 10, fields } = options;
  
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString()
      });
  
      if (fields?.length) {
        params.append('fields', fields.join(','));
      }
  
      const response = await axios.get<PaginatedResponse>(
        `${baseUrl}/api/articles/authorId/${authorId}?${params}`
      );
  
      if (response.data.success) {
        return response.data.data;
      }
  
      return [];
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
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

export const getCategories = async (): Promise<any> => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await axios.get(`${baseUrl}/api/categories`);
    return response.data.data;
}

export const getUserByEmail = async (email: string | null | undefined): Promise<any> => {
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
            
            if (existingTagResponse.data.data && existingTagResponse.data.data[0] && existingTagResponse.data.data[0]._id && tag.name === existingTagResponse.data.data[0].name) {
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

export async function putArticlePublic(blog: any, id: string) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await axios.put(`${baseUrl}/api/articles/${id}`, {
            ...blog,
        });
        if (!response.data && !response.data.data) return;
        return response.data.data;
    }
    catch (error: any) {
        console.error("Error in posting tags in api", error);
        throw error;
    }
}

export async function postArticle(articleData: any) {
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

export async function putUser(userData: any, id: any) {
    await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
        full_name: userData.full_name,
        email: userData.email,
        article_ids: [...userData.article_ids, id]
    });
}

getTagNameById

export function getTagNameById(tags: any, blogs: any): Map<string, string> | undefined {
    try {
        const tagMapper: Map<string, string> = new Map();
        for (const tag of tags) {
            tagMapper.set(tag._id, tag.name);
        }
        const blogMapper: Map<string, string | ""> = new Map();
        for (const blog of blogs) {
            if (blog.tags.length <= 0) {
                continue;
            }
            const tag = tagMapper.get(blog.tags[0]);
            blogMapper.set(blog._id, tag ? tag : "");
        }
        return blogMapper;
    }
    catch (e: any) {
        console.error("Error in getting tag name by id");
    }
}

export async function getBlogsByNumber(number: number) {
    try {

        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await axios.get(`${baseUrl}/api/articles/number/${number.toString()}`);
        if (!response.data.data) {
            return [];
        }
        return response.data.data;
    }
    catch (e: any) {
        console.error("Error in getting blogs by number by id");
    }
}

// export async function getPublicBlogs() {
//     try {
//         const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//         const response = await axios.get(`${baseUrl}/api/articles/public`);
//         if (!response.data.data) {
//             return [];
//         }
//         return response.data.data;
//     }
//     catch (e: any) {
//         console.error("Error in getting blogs by number by id");
//     }
// }

interface PaginationOptions {
    page?: number;
    limit?: number;
    fields?: string[];
    cache?: RequestCache;
  }
  
  export async function getPublicBlogs(options: PaginationOptions = {}):Promise<any> {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const { page = 1, limit = 10, fields, cache = 'force-cache' } = options;
  
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString()
      });
  
      if (fields?.length) {
        params.append('fields', fields.join(','));
      }
      const response = await axios.get(
        `${baseUrl}/api/articles/public?${params}`,
        {
          headers: {
            'Cache-Control': 'max-age=60'
          }
        }
      );
  
      if (!response.data.success) {
        console.error("Failed to fetch public blogs:", response.data.error);
        return [];
      }
  
      return {
        blogs: response.data.data,
        pagination: response.data.pagination
      };
  
    } catch (error) {
      console.error("Error in getting public blogs:", error);
      return { blogs: [], pagination: null };
    }
  }

  interface PaginationOptions {
    page?: number;
    limit?: number;
  }
  
  export const getBlogsByCategory = async (
    category: string, 
    options: PaginationOptions = {}
  ): Promise<any> => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const { page, limit } = options;
      
      // Build query parameters
      const params = new URLSearchParams();
      if (page) params.append('page', page.toString());
      if (limit) params.append('limit', limit.toString());
      
      const queryString = params.toString();
      const url = `${baseUrl}/api/categories/${category}${queryString ? `?${queryString}` : ''}`;
      const response = await axios.get(url);
      if (response.data.success) {
        return {
          blogs: response.data.data,
          pagination: response.data.pagination
        };
      }
      
      return { blogs: [], pagination: null };
    } catch (error) {
      console.error("Error fetching blogs by category:", error);
      return { blogs: [], pagination: null };
    }
  }

  export const getTagNameByIds = async (tagIds: string[]): Promise<any[]> => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await axios.post(`${baseUrl}/api/tags/name`, {
        tagIds: tagIds
      });
      if (response.data.success) {
        return response.data.data;
      }
      
      return [];
    } catch (error) {
      console.error("Error fetching tag names:", error);
      return [];
    }
  }

  export const getSearchContent = async () => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await axios.get(`${baseUrl}/api/articles/searchParams`);
        if (response.data.success) {
          return response.data.data;
        }
        return [];
      } catch (error) {
        console.error("Error fetching Search content", error);
        return [];
      }
  }

  export const postCategories = async (categories:any) => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const categoryIds: string[] = [];
        for (const category of categories) {
            if (!category.main_category || !category.secondary_category) {
                continue;
            }
            const existingCategory = await axios.get(`${baseUrl}/api/categories/name/${encodeURIComponent(category.secondary_category)}`);
            console.log(existingCategory);
            console.log(existingCategory.data.data[0]._id);
            if (existingCategory.data.data && existingCategory.data.data[0] && existingCategory.data.data[0]._id && category.secondary_category === existingCategory.data.data[0].secondary_category) {
                categoryIds.push(existingCategory.data.data[0]._id);
            }
            else {
                const response = await axios.post(`${baseUrl}/api/categories`, {
                    ...category
                });
                if (response.data && response.data.data._id) {
                    categoryIds.push(response.data.data._id);
                }
            }
        }
        return categoryIds;
    } catch (error: any) {
        console.error("Error in posting Categories in api", error);
        throw error;
    }
  }