"use client"
import React, { memo, useState } from 'react'
import '@/styles/Card.css'
import { MdDateRange } from "react-icons/md"
import Link from 'next/link'
import { DNA } from 'react-loader-spinner'



type Props = {
  variant?: string;
  blog: any;
  tag?: string;
}

const HeroCard = (props: Props) => {
  const { variant, blog } = props;
  const [loader, setLoader] = useState<boolean>(false);
  const date = new Date(blog.created_at).toLocaleString("en-US", { timeZone: 'Asia/Kolkata' });
  const handleClick = () => {
    setLoader(true);
  }

  return (
    <Link href={`/blog/${blog._id}`} onClick={() => handleClick()}>
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
        <div className="banner-inner pt-5">
          <div className="hero-card-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="thumb after-left-top">
                  <img src={blog.thumbnail} alt="img" />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="banner-details mt-4 mt-lg-0">
                  <div className="post-meta-single">
                    {/* <ul className='flex gap-[1.5rem]' >
                      <li>
                        <div className="tag-base tag-blue">
                          {tag}
                        </div>
                      </li>
                      <li className="date-container">
                      <svg stroke="currentColor" fill="#000" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></svg>
                        <p className='date'>{date}</p>
                      </li>
                    </ul> */}
                  </div>
                  <h2 title={blog.title}>{blog.title}</h2>
                  <p className='card-content'>{blog.content}</p>
                  <div className='relative h-[48px] w-[150px]'>
                    <div className="btn btn-blue">
                      Read More
                    </div>
                    <div className='card-button-overlay'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Link>
  )
}

export default memo(HeroCard)