import { getBlogs } from "@/lib/api";
import axios from "axios";
export const imageToBase64 = (file: File | null): Promise<string> => {
  if (!file) {
    return Promise.resolve('');
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
export async function searchByTagId(id: string) {
  const blogs = await getBlogs();
  const filteredBlogs: any[] = [];
  blogs.forEach((blog: any) => {
    if (blog.tags.includes(id)) {
      filteredBlogs.push(blog);
    }
  });
  return filteredBlogs;
}
export async function uploadToS3(file: File, type: 'image' | 'thumbnail') {
  try {
    // Get presigned URL from your backend
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/s3-upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fileName: `${type}-${Date.now()}-${file.name}`,
        fileType: file.type,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to get presigned URL');
    }
    const { uploadUrl, imageUrl } = await response.json();
    await axios.put(uploadUrl, file);
    return imageUrl;
  } catch (error) {
    console.error('Error uploading to S3:', error);
    throw new Error('Failed to upload image');
  }
}
