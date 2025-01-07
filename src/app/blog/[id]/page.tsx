import "../blog.css";
import Link from 'next/link';
import Image from "next/image";
import { getArticleById, getBlogsByNumber, getTagNameByIds, getUserByEmail, getUserById } from '@/lib/api';
import BlogFormatter from "@/components/atoms/BlogContent";
import { auth } from "@/auth";
import OverlayWarning from "@/components/atoms/OverlayWarning";
import Footer from "@/components/molecules/Footer";
import HorizontalCard from "@/components/molecules/HorizontalCard";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import TagList from "@/components/atoms/TagList";

interface BlogData {
  id: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  views: number;
  author_id: string;
  tags: string[];
  breadcrumbs: any[];
}

interface AuthorData {
  full_name: string;
  email: string;
  work_category: string;
}

interface PageParams {
  
}

export default async function BlogPage(context:any) {
  // Parallel fetch of initial data
  const {id} = await context.params;
  const [session, blogData, relatedBlogs] = await Promise.all([
    auth(),
    getArticleById(id) as Promise<BlogData>,
    getBlogsByNumber(8),
  ]);

  // Fetch author data after getting blog data
  // const userData = await getUserByEmail(session?.user?.email);
  // const authorData = await getUserById(blogData.author_id) as AuthorData;
  // const tags = await getTagNameByIds(blogData.tags);

  const [userData, authorData, tags] = await Promise.all([
    getUserByEmail(session?.user?.email),
    getUserById(blogData.author_id),
    getTagNameByIds(blogData.tags,)
  ]);

  const formattedDate = new Date(blogData.created_at).toLocaleDateString();
  const previewBlogs = relatedBlogs.slice(0, 3);

  return (
    <>
      {(!session || !userData.work_category ) && <OverlayWarning 
      type={!session ? "not logged in" : "not registered"}
      />}
      
      <div className="blog-container">
        <Breadcrumb breadcrumbs={blogData.breadcrumbs} />
        
        <h1 className="blog-title">{blogData.title}</h1>
        
        <p className="blog-meta">
          <Link href={`/author/${authorData.email}`}>
            <span className="font-semibold text-[#AD103A]">
              Author: {authorData.full_name}
            </span>
          </Link>
          <span>-</span>
          <span>Published: {formattedDate}</span>
        </p>

        <Image
          src={blogData.thumbnail}
          alt={`${blogData.title} thumbnail`}
          width={800}
          height={400}
          className="blog-thumbnail"
          loading="lazy"
          priority={false}
        />

        <div className="blog-content">
          <BlogFormatter content={blogData.content} />
        </div>

        <div>
          <h2 className="pb-[0.75rem] text-[1.5rem]">Relevant Tags</h2>
          <TagList tags={tags} />
        </div>
      </div>

      <h2 className="px-[1.5rem] pb-[0.75rem] text-[1.5rem]">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 w-[100%] px-[1.5rem]">
        {relatedBlogs.map((blog:any, index:any) => (
          <HorizontalCard
            key={`${blog.id}-${index}`}
            blog={blog}
          />
        ))}
      </div>

      <Footer blogs={previewBlogs} />
    </>
  );
}