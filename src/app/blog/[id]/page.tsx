import "../blog.css";
import Navbar from '@/components/atoms/Navbar';
import Link from 'next/link';
import { getArticleById, getBlogs, getUserById } from '@/lib/api';
import BlogFormatter from "@/components/atoms/BlogContent";
import Grid from "@/components/atoms/Grid";
import { useContext } from "react";
import { BlogContext } from "@/context/BlogContext";
import { auth } from "@/auth";
import OverlayWarning from "@/components/atoms/OverlayWarning";

type BlogPageProps = {
  blog: {
    _id: string;
    thumbnail: string;
    created_at: string;
    updated_at: string;
    title: string;
    content: string;
    views: number;
    tags: string[];
    author: string;
  };
};

export default async function BlogPage(context: any) {
  const { id } = await context.params as { id: string };
  const session = await auth();
  const blogData = await getArticleById(id);
  const userData = await getUserById(blogData.author_id);
  const blog = {
    _id: blogData._id.toString(),
    thumbnail: blogData.thumbnail,
    created_at: blogData.created_at,
    updated_at: blogData.updated_at,
    title: blogData.title,
    content: blogData.content,
    views: blogData.views,
    tags: blogData.tags, // Assuming tags have a 'name' property
    author: userData?.full_name,
    email: userData?.email // Assuming author has a 'name' field
  };

  return (
    <>
      <Navbar />
      {
        !session && <OverlayWarning/>
      }
      <div className="blog-container">
        <h1 className="blog-title">{blog.title}</h1>
        <img src={`${blog.thumbnail}`} alt="thumbnail" width="800"
          height="400" className='blog-thumbnail' />
        <p className="blog-meta">
          <Link href={`/author/${blog.email}`} >
            <span className='font-semibold text-[#10AD3E]' >
              Author: {blog.author}</span>
          </Link>
          |
          <span>Published: {new Date(blog.created_at).toLocaleDateString()}</span>
        </p>
        <div className="blog-content">
          <BlogFormatter content={blog.content} />
        </div>
        {/* <Grid title="Related Content" blogs={blogs.slice(0, 4)} /> */}
      </div>
    </>
  );
}



