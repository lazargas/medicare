import { getBlogs } from "@/lib/api";

export const imageToBase64 = (file: File|null): Promise<string> => {
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


export async function searchByTagId(id:string){
  const blogs = await getBlogs();
  const filteredBlogs:any[] = [];
  blogs.forEach((blog:any) => {
    if(blog.tags.includes(id)){
      filteredBlogs.push(blog);
    }
  });
  
  return filteredBlogs;
}