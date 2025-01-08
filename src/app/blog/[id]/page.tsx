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
  source:string;
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
        <div className="blog-source" >
            <strong>Source :</strong> {blogData.source}
        </div>
        <div className="text-xs border my-2.5 p-[5px] border-solid border-[#123d66] bg-[#fcfcfc]" >
        <div className="space-y-4">
        {/* Primary Disclaimer */}
        <p className=" text-gray-800 md:text-[0.85rem] text-[0.75rem]">
          Disclaimer: This website is primarily for healthcare professionals. The content here does not replace medical advice and should not be used as medical, diagnostic, endorsement, treatment, or prescription advice. Medical science evolves rapidly, and we strive to keep our information current. If you find any discrepancies, please contact us at{' '}
          <a href="mailto:corrections@doctornewsdaily.in" className="text-blue-600 hover:text-blue-800">
            corrections@doctornewsdaily.in
          </a>
          . Read our{' '}
          <Link href="/tnc#correction-policy" className="text-blue-600 hover:text-blue-800">
            Correction Policy here
          </Link>
          .
        </p>

        {/* Secondary Disclaimer */}
        <p className=" text-gray-800 md:text-[0.85rem] text-[0.75rem]">
          Nothing here should be used as a substitute for medical advice, diagnosis, or treatment. We do not endorse any healthcare advice that contradicts a physician's guidance. Use of this site is subject to our{' '}
          <Link href="/tnc#tnc" className="text-blue-600 hover:text-blue-800">
            Terms of Use
          </Link>
          ,{' '}
          <Link href="/tnc#privacy-policy" className="text-blue-600 hover:text-blue-800">
            Privacy Policy
          </Link>
          , and{' '}
          <Link href="/tnc#advertising-policy" className="text-blue-600 hover:text-blue-800">
            Advertisement Policy
          </Link>
          . For more details, read our{' '}
          <Link href="/tnc#disclaimer" className="text-blue-600 hover:text-blue-800">
            Full Disclaimer here
          </Link>
          .
        </p>

        {/* Note Section */}
        <div className="mt-6">
          <p className=" font-medium md:text-[0.85rem] text-gray-900 text-[0.75rem]">
            NOTE:{' '}
            <span className="font-bold">
              Join us in combating medical misinformation. If you encounter a questionable health, medical, or medical education claim, email us at{' '}
              <a href="mailto:factcheck@doctornewsdaily.in" className="text-blue-600 hover:text-blue-800">
                factcheck@doctornewsdaily.in
              </a>{' '}
              for evaluation.
            </span>
          </p>
        </div>
      </div>
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