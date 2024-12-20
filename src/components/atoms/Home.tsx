"use client"
import HeroCard from "../molecules/HeroCard";
import { memo, ReactNode } from "react";
import VerticalCard from "../molecules/VerticalCard";
import OverlayCard from "../molecules/OverlayCard";
import HorizontalCard from "../molecules/HorizontalCard";
import Carousel from "../molecules/Carousel";
function HomePage(props: any) {
  const { blogs } = props;

  const sliderCards = [
    <HeroCard 
      blog={blogs[0]}
      key={1}
    />,
    <HeroCard 
      blog={blogs[1]}
      key={2}
    />,
    <HeroCard 
      blog={blogs[2]}
      key={3}
    />
  ];
  
  return (
    <>
      <div className="container">
        <div className="flex items-center justify-center flex-col gap-[1rem]" >
         <div className="md:h-[500px] w-[100%] h-[100%]" >
         <Carousel
         autoSlide={true}
         slideInterval={2000}
        >
          {sliderCards}
          </Carousel>
          </div> 
       
        {/* <HeroCard blog={blogs[0]} /> */}
        <div className="md:flex items-center justify-between w-[100%] md:flex-row flex-col hidden"   >
        <Carousel
        visibleCards={4}
        >
        {
          blogs.map((blog:any,index:any)=>{
            
            return (
            <VerticalCard key={`${blog.title}${index}`} blog={blog} />
          )})
        }
         </Carousel>
        </div>
        <div className="flex items-center justify-between w-[100%] md:flex-row flex-col md:hidden"   >
        <Carousel
        visibleCards={1}>
        {
          blogs.map((blog:any,index:any)=>{
            
            return (
            <VerticalCard key={`${blog.title}${index}`} blog={blog} />
          )})
        }
         </Carousel>
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