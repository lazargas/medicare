"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { getBlogs } from "@/lib/api";
import { Audio } from "react-loader-spinner";
import Link from "next/link";

export default function Home() {
  const [blogs, setBlogs] = useState<any>([]);
  const [loader, setLoader] = useState<boolean>(false);

  async function fetchBlogs() {
    setTimeout(async () => {
      const response = await getBlogs();
      setBlogs(response);
    }, 2000);
  }

  useEffect(() => {
    try {
      setLoader(true);
      fetchBlogs();
    } catch (e) {
      console.log(e);
    } finally {
      setLoader(false);
    }
  }, []);

  return (
    <>

      <div className="container">
        <h1 className="title">Blog Collection</h1>
        {
          loader || blogs.length===0 ?
            <div className=" h-[80dvh] w-full flex justify-center items-center" >
              <Audio />
            </div>
            :
            <div className="grid">
              {blogs.map((blog: any) => (
                <Link key={blog._id} href={`/blog/${blog._id}`}>
                  <div className="card">
                    <img
                      src={blog.thumbnail}
                      alt="thumbnail"
                      className="thumbnail"
                    />
                    <div className="content">
                      <h2 className="blog-title">{blog.title}</h2>
                      <p className="blog-content">{blog.content}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
        }
        <style jsx>{`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
    max-height: 400px;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .thumbnail {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .content {
    padding: 15px;
  }

  .blog-title {
    font-size: 1.25rem;
    color: #333;
    margin: 0 0 10px;
  }

  .blog-content {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* Number of lines to show */
  }
`}</style>
      </div>

    </>
  );
}

