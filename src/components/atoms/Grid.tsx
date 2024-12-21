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
        <div className='flex flex-col w-[100%] items-center justify-center' >
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
                                <VerticalCard
                                blog={blog}
                                key={`${blog.title}${index}`}
                                />
                            ))}
                        </div>
                    </>
            }
        </div>
    )
}
export default Grid