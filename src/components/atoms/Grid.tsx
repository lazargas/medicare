"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import "@/styles/grid.css";
import { putArticlePublic } from '@/lib/api';
import { DNA } from 'react-loader-spinner';
import VerticalCard from '../molecules/VerticalCard';
type Props = {
    blogs: any[],
    title: string,
    isAdmin?: boolean
}
const Grid = (props: Props) => {
    const [loader, setLoader] = useState(false);
    const { blogs, title, isAdmin } = props;
    const handleClick = () => {
        setLoader(true);
    }
    const handleApproveBlog = async (blog: any) => {
        const id = blog._id;
        delete blog._id;
        const updatedArticle = await putArticlePublic(blog, id);
        window.location.href = '/admin';
    }
    return (
        <div className='flex flex-col w-[100%] items-center justify-center p-2' >
            {
                loader ? <div className='grid-loader' >
                    <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </div> :
                    <>
                        <h1 className="grid-title">{title}</h1>
                        <div className="grid-template">
                            {blogs.map((blog: any,index:any) => (
                                <div key={`${blog.title}${index}`} className='flex flex-col'
                                >
                                 <VerticalCard
                                blog={blog}
                                />
                                {
                                    isAdmin &&
                                    <div className='p-[1.5rem] flex items-center justify-center gap-[1.5rem]' >
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => handleApproveBlog(blog)} >Approve</button>
                                        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reject</button>   
                                    </div>
                                }
                                </div>
                            ))}
                        </div>
                    </>
            }
        </div>
    )
}
export default Grid