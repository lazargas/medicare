"use client"
import React, { createContext, ReactNode, useEffect, useState } from 'react';

// Initialize context with proper typing
export const BlogContext = createContext({});

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
   const [blogs,setBlogs] = useState();

 


  return (
    <BlogContext.Provider value={{ blogs,setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};