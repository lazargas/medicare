"use client"
import HeroCard from "../molecules/HeroCard";
import { memo } from "react";
import VerticalCard from "../molecules/VerticalCard";
import OverlayCard from "../molecules/OverlayCard";
import HorizontalCard from "../molecules/HorizontalCard";
function HomePage(props: any) {
  const { blogs } = props;
  
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-[1rem]" >
        <HeroCard blog={blogs[0]} />
        <div className="flex items-center justify-between w-[100%] md:flex-row flex-col "   >
        {
          blogs.slice(1,6).map((blog:any,index:any)=>{
            
            return (
            <VerticalCard key={`${blog.title}${index}`} blog={blog} />
          )})
        }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 w-[100%] " >
        {
          blogs.slice(7,17).map((blog:any,index:any)=>{
            return (
            <OverlayCard key={`${blog.title}${index}`} blog={blog}  />
          )})
        }
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 w-[100%] px-[1.5rem] " >
        {
          blogs.slice(18,32).map((blog: any, index: any) => {
            return (
              <HorizontalCard key={`${blog.title}${index}`} blog={blog} />
            )
          })
        }
      </div>
        </div>
        <style jsx>{`
  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
  }
`}</style>
      </div >
    </>
  );
}
export default memo(HomePage);