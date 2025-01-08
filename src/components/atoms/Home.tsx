"use client"
import HeroCard from "../molecules/HeroCard";
import { memo, ReactNode, useEffect, useState } from "react";
import VerticalCard from "../molecules/VerticalCard";
import OverlayCard from "../molecules/OverlayCard";
import HorizontalCard from "../molecules/HorizontalCard";
import Carousel from "../molecules/Carousel";
import { DNA } from "react-loader-spinner";

function HomePage(props: any) {
  const { blogs } = props;
  const [loader, setLoader] = useState<boolean>(false);
  const handleClick = () => {
    setLoader(true);
  }
  
  const {firstEditorialStartRange,firstEditorialEndRange,secondEditorialStartRange,secondEditorialEndRange,firstOverlayStartRange,firstOverlayEndRange,firstHorizontalStartRange,firstHorizontalEndRange} = props;

  return (
    <>
      {loader ? (
        <div className='card-loader'>
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <div className="container">
          <div className="flex items-center justify-center flex-col" >
            <div className="flex md:h-[365px] w-[100%] h-[550px]" onClick={() => handleClick()}>
              <div className="hidden md:flex flex-col gap-[0rem]" >
                <div className='pl-2 flex flex-col' >
                  <p className="text-[18px] font-semibold" >Top Medical News</p>
                  <div className="h-[4px] bg-black w-[35px]" ></div>
                </div>
                {
                  blogs.slice(firstEditorialStartRange,firstEditorialEndRange).map((blog: any, index: any) => {
                    return (
                      <HorizontalCard key={`${blog.title}${index}`} blog={blog} />
                    )
                  })
                }
              </div>
              <Carousel
                autoSlide={true}
                slideInterval={4000}
                title="Top News On Doctor News Daily"
              >
                {
                  blogs.map((blog: any, index: any) => {
                    return (
                      <HeroCard
                        blog={blog}
                        key={`${blog.title}${index}`}
                      />
                    )
                  })
                }
              </Carousel>
              <div className="hidden md:flex flex-col gap-[0rem]" >
                <div className='pl-2 flex flex-col' >
                  <p className="text-[18px] font-semibold" >Editorial</p>
                  <div className="h-[4px] bg-black w-[35px]" ></div>
                </div>
                {
                  blogs.slice(secondEditorialStartRange, secondEditorialEndRange).map((blog: any, index: any) => {
                    return (
                      <HorizontalCard key={`${blog.title}${index}`} blog={blog} />
                    )
                  })
                }
              </div>
            </div>
            <div className="md:flex items-center justify-between h-[350px] w-[100%] md:flex-row flex-col hidden" onClick={() => handleClick()}  >
              <Carousel
                visibleCards={5}
                title="Latest Health News"
              >
                {
                  blogs.map((blog: any, index: any) => {
                    return (
                      <VerticalCard key={`${blog.title}${index}`} blog={blog} />
                    )
                  })
                }
              </Carousel>
            </div>
            <div className="flex items-center justify-between h-[350px] w-[100%] md:flex-row flex-col md:hidden" onClick={() => handleClick()}  >
              <Carousel
                visibleCards={1}
                title="Latest News"
                >
                {
                  blogs.map((blog: any, index: any) => {
                    return (
                      <VerticalCard key={`${blog.title}${index}`} blog={blog} />
                    )
                  })
                }
              </Carousel>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 w-[100%] " >
              {
                blogs.slice(firstOverlayStartRange, firstOverlayEndRange).map((blog: any, index: any) => {
                  return (
                    <OverlayCard key={`${blog.title}${index}`} blog={blog} />
                  )
                })
              }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 w-[100%] " >
              {
                blogs.slice(firstHorizontalStartRange, firstHorizontalEndRange).map((blog: any, index: any) => {
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
      )
      }
    </>
  );
}
export default memo(HomePage);