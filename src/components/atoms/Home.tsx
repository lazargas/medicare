"use client"
import { useEffect, useState,memo } from "react";
import { getBlogs } from "@/lib/api";
import {  DNA } from "react-loader-spinner";
import Grid from "./Grid";


 function HomePage(props: any) {
  const [blogs, setBlogs] = useState<any>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const {user,title} = props; 
  async function fetchBlogs() {
      const response = await getBlogs();
      if(title==="Editorial")
      setBlogs(response.slice(0,Math.min(response.length,4)));
      else{
        setBlogs(response);
    }
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
        {
          loader || blogs.length===0 ?
            <div className=" h-[80dvh] w-full flex justify-center items-center" >
             <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
            </div>
            :
           <Grid blogs={blogs} title={title} />
        }
        <style jsx>{`
  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
   border-right: 1px solid #ddd;
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
    height: 200px;
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
    -webkit-line-clamp: 1; /* Number of lines to show */
  }
`}</style>
      </div>

    </>
  );
}

export default memo(HomePage);