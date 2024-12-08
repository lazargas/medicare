"use client"
import { signIn, signOut } from '@/auth';
import { getBlogs, getTags } from '@/lib/api';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

// Define proper interfaces for your data
interface Blog {
  // Add your blog properties here
  title: string;
  content: string;
  // ... other properties
}

interface Tag {
  name: string;
  category: string;
}

interface BlogContextState {
  user: any;
  setUser: (user: any) => void;
  blogs: Blog[];
  setBlogs: (blogs: Blog[]) => void;
  tags: Tag[];
}

// Initialize context with proper typing
export const BlogContext = createContext<BlogContextState>({} as BlogContextState);

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState<any[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  const fetchBlogsAndTags = async () => {
    try {
      const blogsData = await getBlogs();
      setBlogs(blogsData);
      const tagsData = await getTags();
      setTags(tagsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

 useEffect(()=>{
    fetchBlogsAndTags();
 },[])


  return (
    <BlogContext.Provider value={{ user, setUser, blogs, tags, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};