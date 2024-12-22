import "../blog.css";
import Link from 'next/link';
import { getArticleById, getBlogsByNumber, getTagNameById, getTagNameByIds, getUserById } from '@/lib/api';
import BlogFormatter from "@/components/atoms/BlogContent";
import { auth } from "@/auth";
import OverlayWarning from "@/components/atoms/OverlayWarning";
import Footer from "@/components/molecules/Footer";
import HorizontalCard from "@/components/molecules/HorizontalCard";
import Image from "next/image";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import TagList from "@/components/atoms/TagList";

export default async function BlogPage(context: any) {
  const { id } = await context.params as { id: string };
  const [session,blogData, blogs] = await Promise.all([
    auth(),
    getArticleById(id),
    getBlogsByNumber(8),
  ]);
  const userData = await getUserById(blogData.author_id);
  const blog = {
    _id: blogData._id.toString(),
    thumbnail: blogData.thumbnail,
    created_at: blogData.created_at,
    updated_at: blogData.updated_at,
    title: blogData.title,
    content: blogData.content,
    views: blogData.views,
    author: userData?.full_name,
    email: userData?.email,
    breadcrumbs:blogData.breadcrumbs,
  };
  const tags = await getTagNameByIds(blogData.tags);
  return (
    <>
      {
        !session && <OverlayWarning />
      }
      <div className="blog-container">
        <Breadcrumb breadcrumbs={blog.breadcrumbs} />
        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-meta">
          <Link href={`/author/${blog.email}`} >
            <span className='font-semibold text-[#AD103A]' >
              Author: {blog.author}</span>
          </Link>
          <span>-</span>
          <span>Published: {new Date(blog.created_at).toLocaleDateString()}</span>
        </p>
        <Image src={`${blog.thumbnail}`} alt="thumbnail" width="800"
          height="400" className='blog-thumbnail' loading="lazy"/>

        <div className="blog-content">
          <BlogFormatter content={blog.content} />
        </div>
        <div >
        <h2 className="pb-[0.75rem] text-[1.5rem]" >Relevant Tags</h2>
        <TagList tags={tags} />
        </div>
        
      </div>
      <h2 className="px-[1.5rem] pb-[0.75rem] text-[1.5rem]" >Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 w-[100%] px-[1.5rem] " >
        {
          blogs.map((blog: any, index: any) => {
            return (
              <HorizontalCard key={`${blog.title}${index}`} blog={blog} />
            )
          })
        }
      </div>
      <Footer blogs={[...blogs].slice(0, 3)} />
    </>
  );
}