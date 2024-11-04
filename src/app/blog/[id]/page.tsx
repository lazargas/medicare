import { GetServerSideProps } from 'next';
import mongoose from 'mongoose';
import Blog from '@/lib/models/Blog'; // Import your Blog model
import Image from 'next/image';
import dbConnect from '@/lib/dbConnect';
import "../blog.css";
import Navbar from '@/components/atoms/Navbar';
import User from '@/lib/models/User';
import Link from 'next/link';

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

  // Connect to the database
  await dbConnect();

  // Fetch the blog post by ID
  const blogData = await Blog.findById(id);

  if (!blogData) {
    return {
      notFound: true,
    };
  }

  const userData = await User.findById(blogData.author_id);

  // Serialize the blog data
  const blog = {
    _id: blogData._id.toString(),
    thumbnail: blogData.thumbnail,
    created_at: blogData.created_at.toISOString(),
    updated_at: blogData.updated_at.toISOString(),
    title: blogData.title,
    content: blogData.content,
    views: blogData.views,
    tags: blogData.tags, // Assuming tags have a 'name' property
    author: userData.name,
    email:userData.email // Assuming author has a 'name' field
  };



  return (
    <>
      <Navbar />
      <div className="blog-container">
        <h1 className="blog-title">{blog.title}</h1>
        <Image
          src={blog.thumbnail}
          alt="thumbnail"
          width={800}
          height={400}
          className="blog-thumbnail"
        />
        <p className="blog-meta">
          <Link href={`/author/${blog.email}`} >  
            <span className='font-semibold text-[#10AD3E]' >
            Author: {blog.author}</span>
            </Link> 
          | <span>Views: {blog.views}</span> |
          <span>Published: {new Date(blog.created_at).toLocaleDateString()}</span>
        </p>
        <div className="blog-content">
          <p>{blog.content}</p>
        </div>
      </div>
    </>
  );
}



