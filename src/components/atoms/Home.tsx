"use client"
import { useEffect, useState, memo, useContext } from "react";
import { getBlogs } from "@/lib/api";
import { DNA } from "react-loader-spinner";
import Grid from "./Grid";
import { BlogContext } from "@/context/BlogContext";
import SearchNav from "./SearchBar";



function HomePage(props: any) {
  const [blogs, setBlogs] = useState<any>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const { user, title } = props;
  async function fetchBlogs() {
    const response = await getBlogs();
    if (title === "Ads")
      setBlogs(response.slice(0, Math.min(response.length, 4)));
    else {
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
          loader || blogs.length === 0 ?
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
            <>
            <Grid blogs={blogs} title={title} />
            <Grid blogs={blogs.slice(0,3)} title='Related Posts' />
            </>
            
        }
        <style jsx>{`
  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
  }
`}</style>
      </div>
    </>
  );
}
export default memo(HomePage);