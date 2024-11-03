"use client"
import { signIn, signOut } from '@/auth';
import React, { createContext, ReactNode, useState } from 'react';

// Define the initial state for your context
interface BlogContextState {
   
}

export const BlogContext = createContext<any>({});

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user,setUser] = useState({});
    

    return (
        <BlogContext.Provider value={{user,setUser}}>
            {children}
        </BlogContext.Provider>
    );
};