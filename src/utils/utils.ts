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
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/s3-upload`, {
      fileName: `${type}-${Date.now()}-${file.name}`,
      fileType: file.type,
    });
    const { uploadUrl, imageUrl } = await response.data;
    const uploadImageResponse = await axios.put(uploadUrl, file,{
      headers:{
        'Content-Type':file.type
      }
    });
    return imageUrl;
  } catch (error) {
    console.error('Error uploading to S3:', error);
    throw new Error('Failed to upload image');
  }
}


export function generateTwoNumbersWithDifference(range: { min: number; max: number }, difference: number): [number, number] {
  const { min, max } = range;
  // Generate first random number
  const firstNumber = Math.floor(Math.random() * (max - min - difference + 1)) + min;
  // Generate second number that's exactly 'difference' away from first
  const secondNumber = firstNumber + difference;
  return [firstNumber, secondNumber];
}